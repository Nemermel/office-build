class CreateOffices < ActiveRecord::Migration
  def change
    create_table :offices do |t|
      t.string :name
      t.text :description
      t.string :image
      t.float :cost

      t.timestamps null: false
    end
  end
end
