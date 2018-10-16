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
    end
    json.set! post.recipient_id do
      json.partial! '/api/users/min_user', user: post.recipient
    end
  end
end
