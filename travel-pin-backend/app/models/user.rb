class User < ApplicationRecord
  has_many :boards

  validates :name, presence: true, uniquness: true
end
