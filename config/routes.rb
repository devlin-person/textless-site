Rails.application.routes.draw do
  resources :pictures

  root 'static_pages#index'
end
