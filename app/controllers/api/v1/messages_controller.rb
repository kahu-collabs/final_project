class Api::V1::MessagesController < ApplicationController
  before_filter :require_current_user, only: [:destroy, :create]

  def index
    posts = Post.where(suburb_id: params[:suburb_id]).reverse
    render json: posts
  end

  def create
      post = Post.create(post_params.merge(user: current_user))

    if post.persisted?
      render json: post
    else
      head 400
    end
  end

  private

    def post_params
        params.permit(:suburb_id, :body)
    end

    def require_current_user
      head 403 unless current_user
    end


end

