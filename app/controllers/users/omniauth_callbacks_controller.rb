class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
	before_action :authorize_user, only: [:marvin]

	def marvin
		@user = User.from_omniauth(request.env["omniauth.auth"])
		if @user.persisted?
			sign_in_and_redirect @user, :event => :authentication
			set_flash_message(:notice, :success, :kind => "42") if is_navigational_format?
		else
				session["devise.marvin_data"] = request.env["omniauth.auth"]
				redirect_to new_user_registration_url
			end
	end
	private
		def authorize_user
			if AuthorizeUser.find_by(login: request.env["omniauth.auth"]["info"]["nickname"])
				return true
			else
				redirect_to "/users/sign_in"
				flash[:alert] = request.env["omniauth.auth"]["info"]["nickname"]  + " You're not authorized"
			end
		end
end
