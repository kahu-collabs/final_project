require 'rails_helper'

RSpec.feature "MakeReports", type: :feature, js: true do

  describe "make a report" do
    before do
      Report.destroy_all
      User.destroy_all
    end
    it 'sends a report to the database when all fields are complete' do
      visit root_path
      login
      click_on 'Toggle menu'
      click_on 'Report'
      find '#incident'
      select('Other', :from => 'incident')
      fill_in 'description', with: "Things"
      fill_in 'date', with: "01-01-2005"
      find('#map').click
      find '#reportsubmit'
      expect{click_on('reportsubmit')}.to change{Report.all.length}.by(1)
    end
    after do
      Report.destroy_all
      User.destroy_all
    end
  end
end
