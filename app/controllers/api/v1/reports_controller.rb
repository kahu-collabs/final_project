class Api::V1::ReportsController < ApplicationController

	def index
		@reports = Report.all
		render json: @reports
	end

	def show
		@report = Report.find
		render json: @report
	end

	def create
		user = current_user
		if !user
			head 403
		else
			report = Report.create(report_params.merge(user: user))
			if report.persisted?
				render json: report
			else
				head 400
			end
		end
	end

	def destroy
		if !current_user
			head 403
		else
			report = Report.find_by(id: params[:id])
			if report
				report.destroy
				head 200
			else
				head 400
			end
		end
	end

	private

    def report_params
        params.permit(:description, :happened_before,
            :additional_info, :location, :category_types_id)
    end
end
