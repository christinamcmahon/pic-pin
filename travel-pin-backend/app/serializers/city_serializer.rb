class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :lat, :lng
  has_many :photos
  has_many :boards, through: :photo
end
