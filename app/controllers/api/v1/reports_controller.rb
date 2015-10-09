class Api::V1::ReportsController < ApplicationController
  before_filter :require_current_user, only: [:destroy, :create]

	def index
		@reports = Report.all
		render json: @reports
	end

	def show
		@report = Report.find #which report is this meant to find?
		render json: @report
	end

	def create
			report = Report.create(report_params.merge(user: current_user))

    if report.persisted?
      render json: report
    else
      head 400
    end
  end

	def destroy
    if report = Report.find_by(id: params[:id])
      report.destroy
      head 200
    else
      head 400
    end
	end

	private

    def report_params
        params.permit(:description,
        							:happened_before,
            					:date,
            					:location,
            					:category_type)
    end

    def require_current_user
      head 403 unless current_user
    end
end
