class Board < ApplicationRecord
    belongs_to :user
    has_many :photos 
    has_many :cities, through: :photos
end
