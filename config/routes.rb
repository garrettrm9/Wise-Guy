Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  get 'isLoggedIn', :to => 'users#is_logged_in'
  post 'users/login', :to => 'users#login'
  resources :jokes
  resources :routines, :except => ['show']
  get 'users/:id/routines' => 'routines#show'
  resources :routine_with_jokes
end
