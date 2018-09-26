json.extract! post, :id, :author_id, :recipient_id, :body
json.created_at(post.created_at.strftime('%B %e, %Y'))