class CreateBoards < ActiveRecord::Migration[6.0]
  def change
    create_table :boards do |t|
      t.string :title
      t.integer :user_id
      t.text :note

      t.timestamps
    end
  end
end
