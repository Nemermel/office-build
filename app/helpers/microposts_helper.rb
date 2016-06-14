module MicropostsHelper
	def current_comment
    @current_comment ||= Comment.find_by(id: params[:id])
	end
end

