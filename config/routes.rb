Rails.application.routes.draw do



  root 'jsmaps#main'

  get 'auth/:provider/callback', to: 'sessions#create'

  delete 'sign_out', to: "sessions#destroy", as: 'sign_out'


	namespace :api do
		namespace :v1 do
  			resources :reports, except: [:edit, :new]
		end
	end
end

