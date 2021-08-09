Rails.application.routes.draw do
  resources :form_components, only: :index
end
