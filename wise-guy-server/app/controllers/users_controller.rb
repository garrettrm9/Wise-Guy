class UsersController < ApplicationController
  
    def index
      puts 'called'
      session[:session_token] = 3
      render json: [1, 2, 3, 4]
    end

    def gen_token(user_id)
      payload = {id: user_id}
      JWT.encode(payload, Rails.application.secrets.secret_key_base) 
    end

    def create
      email = params[:email]
      password = params[:password]
      first_name = params[:first_name]
      last_name = params[:last_name]

      new_user = User.new({
        password: password,
        email: email,
        first_name: first_name,
        last_name: last_name
      })


      if new_user.valid?
        new_user.save
        render json: {user: new_user, token: gen_token(new_user.id)}
      else
        render nothing: true, status: 401
      end
    end

    def index
      @users = User.all
    end

    def is_logged_in
      if current_user
        render json: current_user
      else 
        render nothing: true, status: 401
      end
    end

    def login
      email = params[:email]
      password = params[:password]

      user = User.find_from_credentials email, password
      if user.nil?
        render nothing: true, status: 401
      else 
        render json: {user: user, token: gen_token(user.id)}
      end
    end  
end