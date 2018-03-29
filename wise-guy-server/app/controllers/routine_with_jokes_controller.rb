class RoutineWithJokesController < ApplicationController
  # def index
  #   routineWithJokes = RoutineWithJoke.all
  #   render json: routineWithJokes
  # end 

  def show
    # routineWithJoke = RoutineWithJoke.find(params[:id])
    # render json: routineWithJoke
    routineId = Routine.find(params[:id])
    routine = routineId.jokes
    render json: routine
  end

  def create
    routineWithJoke = RoutineWithJoke.create!(routineWithJoke_params)
    render json: routineWithJoke
  end

  def update
    routineWithJoke = RoutineWithJoke.find(params[:id])
    routineWithJoke.update!(routineWithJoke_params)
    render json: routineWithJoke
  end

  def destroy
    routineWithJoke = RoutineWithJoke.find(params[:id])
    routineWithJoke.destroy!
    render plain: "RoutineWithJoke deleted ... what's a join table?"
  end

  private

  def routineWithJoke_params
    params.require(:routineWithJokes_params).permit(:routine_id, :joke_id)
  end

end


