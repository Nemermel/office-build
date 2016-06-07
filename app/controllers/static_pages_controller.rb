class StaticPagesController < ApplicationController
  def home
  	@offices = Office.all
  end
end
