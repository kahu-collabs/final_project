require 'rails_helper'

RSpec.describe Suburb, type: :model do

  before(:each) do
    Suburb.destroy_all
  end

  describe 'Create attributes in database' do
    it 'create a suburb name' do
      uh = Suburb.create(name:'upper hutt')

      expect(uh.name).to eq('upper hutt')
    end
    it 'create a suburb location' do
      lat_lng = Suburb.create(location: '22.351, 54.4321')

      expect(lat_lng.location).to eq('22.351, 54.4321')
    end
  end

  describe 'Suburb has many users' do
    it 'suburb has a user' do
      @suburb = Suburb.create(name: 'upper hutt')
      @michael = User.create(name: 'michael', suburb: @suburb)

      expect(@suburb.users.first).to eq(@michael)
    end

    it 'User belongs to a suburb' do
      @suburb = Suburb.create(name: 'upper hutt')
      @michael = User.create(name: 'michael', suburb_id: 1)

      expect(@michael.suburb).to eq(@suburb.users.first)
    end
  end
end
