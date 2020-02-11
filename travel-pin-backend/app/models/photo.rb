class Photo < ApplicationRecord
    belongs_to :board
    belongs_to :city
end
