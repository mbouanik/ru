require "oauth2"
require "json"
require 'thread'
class AttendeesController < ApplicationController
  before_action :authenticate_user!, only: [:index, :new, :create, :show, :edit, :update, :destroy]
  before_action :set_attendee, only: [:show, :edit, :update, :destroy]

  # GET /attendees
  # GET /attendees.json
  def index
    @attendees = current_user.attendees
    @time
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
    @current_user = current_user.attendees.find(params[:id])
    # uid = "50b91441f58131657de6d144fc94b37c73ddde63f19ab3ccaa163ef563cd1559"
    # secret = "20980f768aababbadfa8f851b990ec9ee70c5fac0f48fc02598264d9a5f247ef"

    client = OAuth2::Client.new( ENV["FT_ID"],  ENV["FT_SECRET"], site:"https://api.intra.42.fr")
    token = client.client_credentials.get_token

    @user_quest = token.get("/v2/users/" + @current_user.login).parsed
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
      else
        format.html { render :new }
        format.json { render json: @attendee.errors, status: :unprocessable_entity }
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
      else
        format.html { render :edit }
        format.json { render json: @attendee.errors, status: :unprocessable_entity }
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
