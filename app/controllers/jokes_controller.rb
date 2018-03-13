class JokesController < ApplicationController
  def index
    jokes = Joke.all
    render json: jokes
  end 

  def show
    joke = Joke.find(params[:id])
    render json: joke
  end

  def create
    joke = Joke.create!(joke_params)
    render json: joke
  end

  def update
    joke = Joke.find(params[:id])
    joke.update!(joke_params)
    render json: joke
  end

  def destroy
    joke = Joke.find(params[:id])
    joke.destroy!
    render plain: "Joke deleted! Not very funny though ..."
  end

  private

  def joke_params
    params.require(:jokes).permit(:name, :joke_text, :estimated_length)
  end

end
