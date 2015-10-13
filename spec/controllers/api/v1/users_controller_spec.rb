require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do

	let(:mock_current_user){
		user = User.new
		user.id = 1
		allow_any_instance_of(ApplicationController).to receive(:current_user).and_return (user)
		user
	}

	describe "user is logged in" do
		before do
			mock_current_user
		end

		it "returns true as JSON" do
			get :session_check
			expect session: true	
		end
	end

	describe "no current session" do
		it "returns false as JSON" do
			get :session_check
			expect session: false
		end
	end

end