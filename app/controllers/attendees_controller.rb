require "oauth2"
require "json"
require 'thread'
class AttendeesController < ApplicationController
  before_action :authenticate_user!, only: [:index, :new, :create, :show, :edit, :update, :destroy]
  before_action :set_attendee, only: [:show, :edit, :update, :destroy, :new]

  # GET /attendees
  # GET /attendees.json
	def index
		@attendee = Attendee.new
		@attendees = current_user.attendees
		# @time

    #  @cool = Thread.new {
    #   client = OAuth2::Client.new( ENV["FT_ID"],  ENV["FT_SECRET"], site:"https://api.intra.42.fr")
    #   token = client.client_credentials.get_token
    #
    #   @user_quest = token.get("/v2/users/" ).parsed
    # }
	end


  # GET /attendees/1
  # GET /attendees/1.json
	def show
	@attendee = current_user.attendees.find(params[:id])
	# if @current_user.nil?
		client = OAuth2::Client.new( ENV["FT_ID"],  ENV["FT_SECRET"], site:"https://api.intra.42.fr")
		token = client.client_credentials.get_token
		@user_quest = token.get("/v2/users/" + @attendee.login).parsed
	# else
		# redirect_to '/'
	# end
end

def sign_in
	@attendee = current_user.attendees.find(params[:attendee_id]).stamps.build
	@attendee.sign_in = Time.now
	respond_to do |format|
		if @attendee.save
			format.html { redirect_to  '/attendees/' + params[:attendee_id], notice: 'Stamp was successfully created.' }
			format.json { render :show, status: :updated, location:  @attendee }
			format.js
		end
	end
end

  def sign_out
  	@attendee = Stamp.find(params[:id])
  	@attendee.sign_out = Time.now
  	respond_to do |format|
  		if @attendee.save
  			format.html { redirect_to  '/attendees/' + @attendee.attendee_id.to_s, notice: 'Stamp was successfully updated.' }
  			format.json { render :show, status: :updated, location:  @attendee.id }
  			format.js
  		end
  	end
  end
  # GET /attendees/new
def new
	@attendee = current_user.attendees.build
end

  # GET /attendees/1/edit
  def edit
  end

  # POST /attendees
  # POST /attendees.json
  def create
    @attendee = current_user.attendees.build(attendee_params)

    respond_to do |format|
      if @attendee.save
        format.html { redirect_to @attendee, notice: 'Attendee was successfully created.' }
        format.json { render :show, status: :created, location: @attendee }
		format.js
      else
        format.html { render :new }
        format.json { render json: @attendee.errors, status: :unprocessable_entity }
		format.js
      end
    end
  end

  # PATCH/PUT /attendees/1
  # PATCH/PUT /attendees/1.json
  def update
    respond_to do |format|
      if @attendee.update(attendee_params)
        format.html { redirect_to @attendee, notice: 'Attendee was successfully updated.' }
        format.json { render :show, status: :ok, location: @attendee }
		format.js
      else
        format.html { render :edit }
        format.json { render json: @attendee.errors, status: :unprocessable_entity }
		format.js
      end
    end
  end

  # DELETE /attendees/1
  # DELETE /attendees/1.json
  def destroy
    @attendee.destroy
    respond_to do |format|
      format.html { redirect_to attendees_url, notice: 'Attendee was successfully destroyed.' }
      format.json { head :no_content }
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
