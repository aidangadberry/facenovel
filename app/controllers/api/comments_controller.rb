class Api::CommentsController < ApplicationController
  def show
    @comment = Comment.find(params[:id])

    if @comment
      render "api/comments/show"
    else
      render json: ["A comment with that id does not exist"], status: 404
    end
  end

  def index
    post = Post.find(params[:post_id])

    if post
      @comments = post.comments
      render "api/comments/index"
    else
      render json: ["A post with that id does not exist"], status: 404
    end
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment
      if @comment.update(comment_params)
        render "api/comments/show"
      else
        render json: @comment.errors.full_messages, status: 422
      end
    else
      render json: ["A comment with that id does not exist"], status: 404
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment
      @comment.delete
      render "api/comments/show"
    else
      render json: ["A comment with that id does not exist"], status: 404
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:author_id, :post_id, :parent_id, :body)
  end
end