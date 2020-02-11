class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.integer :board_id
      t.integer :city_id
      t.string :photographer
      t.string :download

      t.timestamps
    end
  end
end
