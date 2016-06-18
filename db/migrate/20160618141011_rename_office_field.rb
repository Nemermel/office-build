class RenameOfficeField < ActiveRecord::Migration
  def change
  	change_column :offices, :cost, :text
  end
end
