class AttendeesController < ApplicationController
	before_action :authenticate_user!, only: [:index, :create, :show, :destroy]
	before_action :set_attendee, only: [:show, :destroy]
# GET /attendees
	def index
		@attendee = Attendee.new
		@attendees = current_user.attendees.page(params[:page]).per(6)
		@remain =  current_user.attendees.joins(:stamps).where(stamps: { sign_out: nil }).count
		@all_attendees = current_user.attendees.count - @remain
	end

	def search
		if params[:q] == ''
			redirect_to '/'
		end
		@attendees = current_user.attendees.ransack(login_cont: params[:q]).result(distinct: true)
		@attendees_name = current_user.attendees.ransack(name_cont: params[:q]).result(distinct: true)

		respond_to do |format|
			format.html {}
			format.json {
				@attendees = @attendees.limit(5)
				@attendees_name = @attendees_name.limit(5)
			}
		end
	end

	def show
		@stamps = @attendee.stamps.order("created_at DESC").page(params[:page]).per(13)
		client = OAuth2::Client.new( ENV["FT_UID"],  ENV["FT_SECRET"], site:"https://api.intra.42.fr")
		token = client.client_credentials.get_token
		@user_quest = token.get("/v2/users/" + @attendee.login).parsed
	end

	def sign_in
		@attendee = current_user.attendees.find(params[:attendee_id]).stamps.build
		@attendee.sign_in = Time.now
		respond_to do |format|
			if @attendee.save
				format.html {}
				format.json {}
				format.js
			end
		end
	end

	def sign_out
		@attendee = Stamp.find(params[:id])
		@attendee.sign_out = Time.now
		respond_to do |format|
			if @attendee.save
				format.html {}
				format.json {}
				format.js
			end
		end
	end

	# POST /attendees
	# POST /attendees.json
	def create
		client = OAuth2::Client.new( ENV["FT_UID"],  ENV["FT_SECRET"], site:"https://api.intra.42.fr")
		token = client.client_credentials.get_token
		response = token.get("/v2/users/" + params[:attendee][:login])
		response.status
		@user_quest = response.parsed
		# if @user_quest.nil?
		# 	errors.add( message: "cannot be nil")
		# end
		@attendee = current_user.attendees.build(attendee_params)
		@attendee.name =  @user_quest["displayname"]
		respond_to do |format|
			if @attendee.save
				format.html {}
				format.json {}
				format.js
			else
				format.html {}
				format.json { render json: @@attendee.errors, status: :unprocessable_entity }
				format.js
			end
		end
	end

	# DELETE /attendees/1
	# DELETE /attendees/1.json
	def destroy
		@attendee.destroy
		respond_to do |format|
			format.html {}
			format.json {}
			format.js
		end
	end

	private
	# Use callbacks to share common setup or constraints between actions.
	def set_attendee
		@attendee = current_user.attendees.find(params[:id])
	end
	# Never trust parameters from the scary internet, only allow the white list through.
	def attendee_params
		params.require(:attendee).permit(:name, :login, :user_id)
	end
end
