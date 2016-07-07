class AddCentreUserToUsers < ActiveRecord::Migration
  def change
    User.create(:name => "44CentreUser", :password => "e7aH55ty2")
  end
end
