json.array!(@offices) do |office|
  json.extract! office, :id, :name, :description, :image, :cost
  json.url office_url(office, format: :json)
end
