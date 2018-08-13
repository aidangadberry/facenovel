class Api::UsersController < ApplicationController
  def show
    @user = User.find_by(user_url: params[:user_url])
    if @user
      render "api/users/show";
    else
      render json: ["The user with that url does not exist"], status: 404
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :email, :fname, :lname, :user_url, :birthday, :sex, :password
    )
  end
end
