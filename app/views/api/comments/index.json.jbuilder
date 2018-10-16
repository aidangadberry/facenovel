json.set! 'comments' do
  if @comments.length > 0
    json.set! @comments[0].post_id do
      json.array!(@comments) do |comment|
        json.partial! 'comment', comment: comment
      end
    end
  end
end