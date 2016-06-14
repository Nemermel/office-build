class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :password
      t.string :email

      t.timestamps null: false
    end
    add_column :users, :password_digest, :string
  end
end
