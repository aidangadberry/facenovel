class Api::FriendsController < ApplicationController
  def index
    @friends = Friend.where(requesting_id: params[:current_user_id]).to_a.concat(
               Friend.where(requested_id: params[:current_user_id]).to_a
    );

    render "api/friends/index"
  end

  def show
    @friend = Friend.where(
      "(requesting_id = #{params[:current_user_id]} AND requested_id = #{params[:user_id]}) OR
       (requesting_id = #{params[:user_id]} AND requested_id = #{params[:current_user_id]})"
     ).first

     if @friend
      render "api/friends/show"
    else
      render json: ["Friend request does not exist"], status: 404
    end
  end

  def create
    existingFriendship = Friend.friendship(friend_params)

    if (existingFriendship)
      @friend = existingFriendship
      if (@friend.update(accepted: true))
        render "api/friends/show"
      else
        render json: @friend.errors.full_messages, status: 422
      end
    else
      @friend = Friend.new(friend_params)
      if @friend.save
        render "api/friends/show"
      else
        render json: @friend.errors.full_messages, status: 422
      end
    end
  end

  def update
    @friend = Friend.find(params[:id])

    if (@friend.update(accepted: true))
      render "api/friends/show"
    else
      render json: @friend.errors.full_messages, status: 422
    end
  end

  def destroy
    @friend = Friend.find(params[:id])

    @friend.delete if @friend
  end

  private

  def friend_params
    params.require(:friend).permit(:requesting_id, :requested_id)
  end
end
