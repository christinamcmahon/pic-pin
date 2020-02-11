class UsersController < ApplicationController
    before_action :find_user, only: [:show, :update, :edit, :delete]

    def index
        users = User.all 
        render json: users
    end

    def new
        user = User.new 
    end
    
    def create
        user = User.new(user_params) 
        if user.save
            render json: user
        else 
            render :new 
        end
    end

    def edit
    end
    
    def update
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
