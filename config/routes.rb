Rails.application.routes.draw do
  resources :messages
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    root to: 'static#home'
    get '/about', to: 'static#about'
    get '/services', to: 'static#services'
    get '/projects', to: 'static#projects'
    get '/contact', to: 'static#contact'

end
