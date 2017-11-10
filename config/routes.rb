Rails.application.routes.draw do
  resources :pictures
  resources :photo_display

  root 'static_pages#index'
end
