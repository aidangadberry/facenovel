class Api::PostsController < ApplicationController 
  def index
  end

  def show
    @post = Post.find(params[:id])

    if @post
      render "api/posts/show"
    else
      render json: ["A post with that id does not exist"], status: 404
    end
  end

  def user_posts
    @user = User.find(params[:user_id])

    if @user
      @posts = @user.authored_posts
      render "api/posts/index"
    else
      render json: ["A user with that id does not exist"], status: 404
    end
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