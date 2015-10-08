require 'rails_helper'

RSpec.describe Message, type: :model do
  before(:each) do
    Message.destroy_all
  end

  describe 'Create tables in database' do
    it 'has a title table' do
      title = Message.create(title: 'title')

      expect(title).to eq(Message.first)
    end

    it 'has a body table' do
      body = Message.create(body: 'body')

      expect(body).to eq(Message.first)
    end
  end

  describe 'message table belongs to user' do

  end
end
