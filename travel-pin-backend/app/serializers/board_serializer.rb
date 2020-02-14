class BoardSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :note
  belongs_to :user
  has_many :photos
end
