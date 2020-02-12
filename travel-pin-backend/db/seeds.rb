# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

# alicia = User.create(name: "alicia")
# xtina = User.create(name: "christina")

# a1 = Board.create(user_id: alicia.id, note: "hello!")
# c1 = Board.create(user_id: xtina.id, note: "hola!")
count = 0
CSV.foreach(Rails.root.join('db/worldcities.csv'), headers: true) do |row|

    if(count < 100)
        City.create({
            name: row[1], 
            country:row[4], 
            lat: row[2], 
            lng: row[3]
        })
    end
    count += 1


end


