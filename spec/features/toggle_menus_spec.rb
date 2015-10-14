require 'rails_helper'

RSpec.feature "ToggleMenus", type: :feature, js: true do
	describe 'Toggle menu' do
    before { visit root_path }
		it 'Toggle menu is on the page' do
			expect(page).to have_content('Toggle menu')
		end
		it 'Clicking on toggle menu displays the menu' do
			expect(page).not_to have_content('Report')
			click_on 'Toggle menu'
			expect(page).to have_content('Report')
		end
		it 'Displays the submit button after clicking on the map' do
			click_on 'Toggle menu'
			click_on 'View'
			fill_in 'radius', with: '2'
			expect(page).not_to have_content('Submit')
			find('#map').click
			expect(find('#viewsubmit')).to be_truthy
		end
	end
end
