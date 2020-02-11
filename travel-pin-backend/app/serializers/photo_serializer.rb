class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :board_id, :city_id, :photographer, :download
  belongs_to :board
  belongs_to :city
end
