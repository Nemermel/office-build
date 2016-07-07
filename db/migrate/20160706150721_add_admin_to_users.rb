class AddAdminToUsers < ActiveRecord::Migration
  def change
    User.create(:name => "admin", :password => "q6Ah23e1D", :email => "admin@admin.com")
    User.create(:name => "44CentreUser", :password => "e7aH55ty2")    
  end
  # def self.up
  #   User.create(:name => "admin", :password => "admin", :email => "admin@admin.com")
  # end

  # def self.down
  #   User.delete_all(:name => "admin")
  # end
end
