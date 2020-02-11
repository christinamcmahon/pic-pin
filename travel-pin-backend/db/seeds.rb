# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

alicia = User.create(name: "alicia")
xtina = User.create(name: "christina")

tokyo = City.create(name: "Tokyo", country:"Japan", lat: 1.55, lng: 10.3)
nyc = City.create(name: "New York City", country:"USA", lat: 5.55, lng: 8.3)

a1 = Board.create(user_id: alicia.id, note: "hello!")
c1 = Board.create(user_id: xtina.id, note: "hola!")

p1 = Photo.create(board_id: a1.id, city_id: tokyo.id, photographer: "coffee", download:"download")
p2 = Photo.create(board_id: c1.id, city_id: nyc.id, photographer: "beans", download:"download2")


