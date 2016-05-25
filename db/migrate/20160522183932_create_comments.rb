class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :title
      t.text :context
      t.string :username

      t.timestamps null: false
    end
  end
end
