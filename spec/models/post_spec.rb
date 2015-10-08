require 'rails_helper'

RSpec.describe Post, type: :model do
  before(:each) do
    Post.destroy_all
  end

  describe 'Create tables in database' do
    it 'has a title field' do
      post = Post.create(title: 'title')

      expect(post).to eq(Post.first)
    end

    it 'has a body field' do
      body = Post.create(body: 'body')

      expect(body).to eq(Post.first)
    end
  end

  describe 'Post table belongs to user' do

  end
end
