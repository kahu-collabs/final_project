class Api::V1::UsersController < ApplicationController

	def session_check
		current_user = User.find_by_id(session[:user_id])
		if current_user
			render json: {logged_in: true}
		else
			render json: {logged_in: false}
		end
	end

end
