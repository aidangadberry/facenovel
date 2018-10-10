json.array!(@users) do |user|
  json.extract! user, :id, :fname, :lname, :user_url
end