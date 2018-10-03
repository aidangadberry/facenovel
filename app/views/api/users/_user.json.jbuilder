json.extract! user, :id, :email, :fname, :lname, :user_url, :birthday, :sex
json.profilePictureUrl url_for(user.profile_picture) if user.profile_picture.attached?
json.coverPhotoUrl url_for(user.cover_photo) if user.cover_photo.attached?