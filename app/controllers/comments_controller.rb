class CommentsController < ApplicationController
  def index
    # @comments = Comment.all
    @comments = Comment.order('created_at DESC')
    @comment = Comment.new
    #@microposts = Micropost.all
    #@cathegory = Cathegory.find(@product.cathegory_id)
  end

  def show
    @comment = Comment.find(params[:id])
    @micropost = Micropost.new
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)

    @comment.save
    redirect_to comments_path
  end

private def comment_params
    params.require(:comment).permit(:title, :context, :username)
  end
end
