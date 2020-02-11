class City < ApplicationRecord
    has_many :photos
    has_many :boards, through: :photos
end
