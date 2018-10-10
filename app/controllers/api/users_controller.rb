class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    
    if @user
      render "api/users/show";
    else
      render json: ["The user with that url does not exist"], status: 404
    end
  end
  
  def show_by_url
    @user = User.find_by(user_url: params[:user_url])
    
    if @user
      render "api/users/show";
    else
      render json: ["The user with that url does not exist"], status: 404
    end
  end

  def search
    query = "#{params[:query]}%"
    
    # @users = db.execute(<<-SQL, query)
    # SELECT
    #   *
    # FROM
    #   users
    # WHERE
    #   users.fname LIKE ?
    # SQL

    @users = User.where("LOWER(fname) LIKE ?", query.downcase);
    render "api/users/search_results"
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

  def update_photo
    @user = User.find(params[:user_id])

    if @user
      if @user.update(user_params)
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      render json: ["A user with that id does not exist"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :email, :fname, :lname, :user_url, :sex, :password, :profile_picture, :cover_photo
    )
  end
end
