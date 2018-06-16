class StampsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :destroy, :update]
  def new
    @stamp = current_user.attendees.find(params[:attendee_id]).stamps.build
    @stamp.sign_in = Time.now
    #
    if @stamp.save
        redirect_to  '/attendees/' + params[:attendee_id]
    end
  end
  #
  # def create
  #   @stamp = current_user.attendees.find(params[:attendee_id]).stamps.build(stamp_params)
  #   @stamp.sign_out = Time.now
  #   if @stamp.save
  #       redirect_to  '/attendees/' + params[:attendee_id]
  #   end
  # end

  def edit
    @stamp = current_user.attendees.find(params[:attendee_id]).stamps.find(params[:id])
    @stamp.sign_out = Time.now
    if @stamp.save
      redirect_to  '/attendees/' + params[:attendee_id]
    end
  end

  # def update
  #   @stamp = current_user.attendees.find(params[:attendee_id]).stamps.find(params[:id]).update(stamp_params)
  #   # @stamp.sign_out = Time.now
  #   if @stamp.save
  #     redirect_to  '/attendees/' + params[:attendee_id]
  #   end
  # end

  private

  def stamp_params
    params.require(:stamp).permit(:sign_in, :sign_out)
  end
end
