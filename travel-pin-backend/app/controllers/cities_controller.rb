class CitiesController < ApplicationController
    def index
        cities = City.all 
        render json: cities
    end
    
    def show 
        city = City.find(params[:id])
        render json: city
    end

    # def create
    #     city = City.create(name: params[:name], country: params[:country], lat: params[:lat], lng: params[:lng])
    # end
end
