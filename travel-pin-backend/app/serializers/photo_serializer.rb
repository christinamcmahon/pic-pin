class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :board_id, :id
  belongs_to :board
end
