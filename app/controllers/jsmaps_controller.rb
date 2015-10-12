class JsmapsController < ApplicationController

	def main
    @suburbs = Suburb.all

	end
end
