json.partial! "api/comments/comment", comment: @comment
json.extract! @comment, :post_id