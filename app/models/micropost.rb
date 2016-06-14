class Micropost < ActiveRecord::Base
  belongs_to :comment
end
