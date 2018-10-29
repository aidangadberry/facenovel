Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: 'json'} do
    resource :session, only: [:create, :destroy]

    get '/users/url/:user_url', to: 'users#show_by_url'
    get '/users/search', to: 'users#search'
    get '/users/:user_id/friends', to: 'users#friends'
    patch '/users/:user_id/photo', to: 'users#update_photo'
    resources :users, only: [:show, :create]

    resources :posts, except: [:new, :edit]
    get '/users/:user_id/posts', to: 'posts#wall_posts'
    get '/users/:user_id/feed', to: 'posts#feed_posts'

    resources :comments, only: [:show, :create, :update, :destroy]
    get '/posts/:post_id/comments', to: 'comments#index'
  end

  root 'static_pages#root'
end
