Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  get 'isLoggedIn', :to => 'users#is_logged_in'
  post 'users/login', :to => 'users#login'
  resources :jokes, :except => ['show', 'post', 'delete', 'put']
  get 'users/:id/jokes' => 'jokes#show'
  post 'users/:id/jokes' => 'jokes#create'
  delete 'users/:id/jokes/:id' => 'jokes#destroy'
  put 'users/:id/jokes/:id' => 'jokes#update'
  resources :routines, :except => ['index', 'show', 'post', 'delete', 'put']
  get 'users/:id/routines' => 'routines#index'
  get 'users/:id/routines/:number' => 'routines#show'
  post 'users/:id/routines' => 'routines#create'  
  delete 'users/:id/routines/:id' => 'routines#destroy'
  put 'users/:id/routines/:id' => 'routines#update'
  resources :routine_with_jokes, :except => ['index', 'show', 'post']
  get 'routines/:id' => 'routine_with_jokes#show'
  post 'routines/:routine_id/jokes/:joke_id' => 'routine_with_jokes#create'
end
