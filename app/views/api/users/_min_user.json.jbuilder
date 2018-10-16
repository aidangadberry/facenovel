json.extract! user, :id, :fname, :lname, :user_url
json.profilePictureUrl url_for(user.profile_picture)