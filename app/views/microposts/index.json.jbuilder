json.array!(@microposts) do |micropost|
  json.extract! micropost, :id, :author, :content, :comment_id
  json.url micropost_url(micropost, format: :json)
end
