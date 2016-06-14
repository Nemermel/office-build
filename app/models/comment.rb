class Comment < ActiveRecord::Base
	has_many :microposts
end
