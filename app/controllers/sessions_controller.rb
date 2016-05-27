class SessionsController < ApplicationController
  def new
  end

  def create
  	user = User.find_by(name: params[:session][:name].downcase)
  	password = User.find_by(password: params[:session][:password])
    if user && password #user.authenticate(params[:session][:password])
      # Log the user in and redirect to the user's show page.
      log_in user
      redirect_to comments_url
    else
      # Create an error message.
      flash[:danger] = 'Invalid name/password combination' # Not quite right!
      render 'new'
    end
  end

  def delete
  	log_out
    redirect_to root_url
  end
end
