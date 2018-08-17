Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    get '/users/:user_url', to: 'users#show'
    resources :friends, only: [:create, :update, :destroy]
    get '/users/:current_user_id/friends', to: 'friends#index'
    get '/users/:current_user_id/friends/:user_id', to: 'friends#show'
  end

  root 'static_pages#root'
end
