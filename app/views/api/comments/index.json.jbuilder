json.set! 'comments' do
  if @comments.length > 0
    json.set! @comments[0].post_id do
      json.array!(@comments) do |comment|
        json.partial! 'comment', comment: comment
      end
    end
  end
end

json.set! 'users' do
  @comments.each do |comment|
    json.set! comment.author_id do
      json.partial! '/api/users/min_user', user: comment.author
    end
  end
end