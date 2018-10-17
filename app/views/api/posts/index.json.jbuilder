json.set! 'posts' do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'post', post: post
    end
  end
end

json.set! 'users' do
  @posts.each do |post|
    json.set! post.author_id do
      json.partial! '/api/users/min_user', user: post.author
      json.profilePictureUrl url_for(post.author.profile_picture)
    end
    json.set! post.recipient_id do
      json.partial! '/api/users/min_user', user: post.recipient
    end
  end
end

json.set! 'comments' do
  @posts.each do |post|
    if post.comments.length != 0
      json.set! post.id do
        json.array!(post.comments) do |comment|
          json.partial! '/api/comments/comment', comment: comment
        end
      end
    end
  end
end