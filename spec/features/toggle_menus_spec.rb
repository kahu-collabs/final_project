require 'rails_helper'

RSpec.feature "ToggleMenus", type: :feature, js: true do
	describe 'Toggle menu' do
		it 'Toggle menu is on the page' do
			visit root_path
			expect(page).to have_content('Toggle menu')
		end
		it 'Clicking on toggle menu displays the menu' do
			visit root_path
			expect(page).not_to have_content('Report')
			click_on 'Toggle menu'
			expect(page).to have_content('Report')
		end
	end
end
