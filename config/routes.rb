Rails.application.routes.draw do
  resources :form_components, only: :index

  root to: "form_components#index"
end
