Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :pictures
    end
  end

  root 'static_pages#index'
end
