class CreateCities < ActiveRecord::Migration[6.0]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :country
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
