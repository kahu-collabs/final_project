class AddDateTimeToReports < ActiveRecord::Migration
  def change
    add_column :reports, :time_1, :datetime
    add_column :reports, :time_2, :datetime
  end
end
