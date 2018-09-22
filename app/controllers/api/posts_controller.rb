class Api::PostsController < ApplicationController 
  def index
  end

  def show
    @post = Post.find(params[:id])
    
  end

  def user_posts
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def post_params
  end
end