class BoardSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :note
  belongs_to :user
  has_many :photos 
  has_many :cities, through: :photo
end
