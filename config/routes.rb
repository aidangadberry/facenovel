Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: 'json'} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:show, :create]
    get '/users/url/:user_url', to: 'users#show_by_url'
    get '/users/:user_id/friends', to: 'users#friends'


    resources :posts, except: [:new, :edit]
    get '/users/:user_id/posts', to: 'posts#user_posts'
  end

  root 'static_pages#root'
end
