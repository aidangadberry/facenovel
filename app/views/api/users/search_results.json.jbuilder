@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :fname, :lname, :user_url
  end
end