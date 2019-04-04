json.extract! post, :id, :author_id, :recipient_id, :body
json.created_at(post.created_at.strftime('%B %e, %Y'))

# if post.images.attached?
#   json.set! 'imageUrls' do
#     urls = post.images.map do |image|
#       url_for(image)
#     end
    
#     json.array! urls
#   end
# end

json.imageUrl url_for(post.image) if post.image.attached?