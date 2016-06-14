class CreateMicroposts < ActiveRecord::Migration
  def change
    create_table :microposts do |t|
      t.string :author
      t.text :content
      t.references :comment, index: true, foreign_key: true

      t.timestamps null: false
    end
    add_index :microposts, [:comment_id, :created_at]
  end
end
