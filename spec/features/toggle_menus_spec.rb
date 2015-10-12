require 'rails_helper'

RSpec.feature "ToggleMenus", type: :feature, js: true do
	describe 'click on toggle menu' do
		it 'Toggle menu is on the page' do
			visit root_path
			expect(page).to have_content('Toggle menu')
		end
	end
end
