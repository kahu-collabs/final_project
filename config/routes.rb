Rails.application.routes.draw do

  root 'jsmaps#main'

  get 'auth/:provider/callback', to: 'sessions#create'

  delete 'sign_out', to: "sessions#destroy", as: 'sign_out'

	namespace :api do
		namespace :v1 do
        get '/nearby' => 'reports#nearby'
        get '/session_check' => 'users#session_check'
        get '/user_reports' => 'reports#user_reports'

  			resources :reports, except: [:edit, :new]
        resources :users
        resources :suburbs
        resources :messages
		end
	end
end

