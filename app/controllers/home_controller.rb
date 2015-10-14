class HomeController < ApplicationController
  before_action :set_auth
    def index
    end

    private
      #is this needed? I can't see @auth used anywhere in app and when I delete it all your tests still pass
      def set_auth
        @auth = session[:omniauth] if session[:omniauth]
      end

end
