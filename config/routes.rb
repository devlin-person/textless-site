# Rails.application.routes.draw do
#   get 'welcome/index'
#
#   get 'pictures/index'
#
#   get 'picture/index'
#
#   devise_for :users
#
#   namespace :api do
#     namespace :v1 do
#       resources :pictures
#     end
#   end
# end

  Rails.application.routes.draw do
    get 'welcome/index'

    devise_for :users
    resources :pictures

    root 'static_pages#index'
  end
