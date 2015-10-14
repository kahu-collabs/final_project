class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private

  def current_user
    #possible refactor for when this is under test
    #@current_user ||= User.find_by(id: session[:user_id])
    begin
      @current_user ||= User.find(session[:user_id]) if session[:user_id]
    rescue
      session[:user_id] = nil
      @current_user = nil
    end
  end

  helper_method :current_user
end
