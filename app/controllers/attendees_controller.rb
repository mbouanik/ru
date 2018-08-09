class AttendeesController < ApplicationController
	before_action :authenticate_user!, only: [:index, :create, :show, :destroy, :search, :sign_in, :sign_out]
	before_action :set_attendee, only: [:show, :destroy]

	def index
		@attendee = Attendee.new
		@attendees = Attendee.page(params[:page]).per(6)
		@remain =  Attendee.joins(:stamps).where(stamps: { sign_out: nil }).count
		@all_attendees = Attendee.count - @remain
	end

	def search
		if params[:q] == ''
			redirect_to '/'
		end
		@attendees = Attendee.ransack(login_cont: params[:q]).result(distinct: true)
		@attendees_name = Attendee.ransack(name_cont: params[:q]).result(distinct: true)

		respond_to do |format|
			format.html {}
			format.json {
				@attendees = @attendees.limit(5)
				@attendees_name = @attendees_name.limit(5)
			}
		end
	end

	def show
		@stamps = @attendee.stamps.order("created_at DESC").page(params[:page]).per(14)
		client = OAuth2::Client.new( ENV["FT_UID"],  ENV["FT_SECRET"], site:"https://api.intra.42.fr")
		token = client.client_credentials.get_token
		@user_quest = token.get("/v2/users/" + @attendee.login).parsed
	end

	def sign_in
		@attendee = Attendee.find(params[:attendee_id]).stamps.build
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

	def create
		client = OAuth2::Client.new( ENV["FT_UID"],  ENV["FT_SECRET"], site:"https://api.intra.42.fr")
		token = client.client_credentials.get_token
		@attendee = Attendee.new(attendee_params)
		begin
			response = token.get("/v2/users/" + params[:attendee][:login])
			@user_quest = response.parsed
			r = "good"
			if params[:attendee][:login] == ""
				r = "Not valid login"
				@attendee.login = ""
			end
		rescue
			r = "Not valid login"
			@attendee.login = ""
		end
		if  r == "good"
			# @attendee.name =  @user_quest["displayname"]
		end
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
		# redirect_to pages.last
	end

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
		@attendee = Attendee.find(params[:id])
	end
	# Never trust parameters from the scary internet, only allow the white list through.
	def attendee_params
		params.require(:attendee).permit(:name, :login, :user_id)
	end
end
