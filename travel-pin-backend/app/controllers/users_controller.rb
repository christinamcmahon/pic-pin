class UsersController < ApplicationController
  before_action :find_user, only: [:show, :update, :edit, :delete]

  def index
    users = User.all
    render json: users
  end

  def show
    render json: user
  end

  def new
    user = User.new
  end

  def create
    user = User.new(user_params)
  end

  def delete
    user.destroy
  end

  private

  def find_user
    user = User.find(params[:id])
    render json: user
  end

  def user_params
    params.require(:user).permit(:name)
  end
end
