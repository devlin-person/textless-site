Rails.application.routes.draw do
  resources :pictures
  resources :photo_display
  # resources :bird_photo
  # resources :cat_photo
  # resources :dog_photo
  # resources :food_photo
  # resources :people_photo
  # resources :building_photo
  # resources :scenery_photo

  root 'static_pages#index'
end
