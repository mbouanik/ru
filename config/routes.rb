Rails.application.routes.draw do
  resources :attendees do
  resources :stamps, only: [:create, :new, :update, :edit]
end
# put "update_stamp" =>'stamps#update'
  # devise_for :users
  root 'attendees#index'
  # post 'search' => 'home#index'
  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }

  devise_scope :user do
    delete 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session_path
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
