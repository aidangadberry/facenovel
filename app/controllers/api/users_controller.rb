class Api::UsersController < ApplicationController
  def show
    @user = User.find_by(user_url: params[:user_url])
    if @user
      render "api/users/show";
    else
      render json: ["The user with that url does not exist"], status: 404
    end
  end

  def friends
    @users = User.all
    render "api/users/index"
  end

  def create
    birthday = Date.new(
      params[:user][:birthday][:year].to_i,
      params[:user][:birthday][:month].to_i + 1,
      params[:user][:birthday][:day].to_i + 1
    )

    @user = User.new(user_params)
    @user.birthday = birthday
    
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
      :email, :fname, :lname, :user_url, :sex, :password
    )
  end
end
