Rails.application.routes.draw do
	resources :attendees
	get :autocomplete, controller: :attendees
	get :search, controller: :attendees
	root 'attendees#index'
	get '/sign_in' => 'attendees#sign_in'
	get '/sign_out' => 'attendees#sign_out'
	devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }
	devise_scope :user do
		delete 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session_path
	end
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
