class BoardsController < ApplicationController
    # index, new, show, create, edit, update, delete
    before_action :find_board, only: [:show, :update, :edit, :delete]

    def index
        boards = Board.all 
        render json: boards
    end

    def new
        board = Board.new 
    end
    
    def create
        board = Board.new(board_params) 
        if board.save
            render json: board
        else 
            render :new 
        end
    end

    def edit
    end
    
    def update
    end

    def delete
        board.destroy
    end

    private 

    def find_board
        board = Board.find(params[:id])
        render json: board
    end

    def board_params
        params.require(:board).permit(:user_id, :n)
    end

end
