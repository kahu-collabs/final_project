require 'rails_helper'

RSpec.describe Post, type: :model do
  before(:each) do
    User.destroy_all
    Post.destroy_all
  end

  describe 'Create row in database' do
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
    it 'post belongs to user' do
      @mike = User.create(name: 'mike')
      @post = Post.create(title: 'title', body: 'body', user_id: @mike.id)

      expect(@mike.posts.first).to eq(@post)
      expect(@post.user).to eq(@mike)
    end
  end


end
