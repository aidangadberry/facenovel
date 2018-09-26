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
      @posts = @user.wall_posts
      render "api/posts/index"
    else
      render json: ["A user with that id does not exist"], status: 404
    end
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post
      if @post.update(post_params)
        render "api/posts/show"
      else
        render json: @post.errors.full_messages, status: 422
      end
    else
      render json: ["A post with that id does not exist"], status: 404
    end
  end

  def destroy
    @post = Post.find(params[:id])

    if @post
      @post.delete
      render "api/posts/show"
    else
      render json: ["A post with that id does not exist"], status: 404
    end
  end

  private

  def post_params
    params.require(:post).permit(:author_id, :body)
  end
end