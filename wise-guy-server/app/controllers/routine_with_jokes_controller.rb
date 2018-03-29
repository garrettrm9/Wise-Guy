class RoutineWithJokesController < ApplicationController

# !!!renders all of a routine's jokes!!!
  def index
    routineId = Routine.find(params[:id])
    routine = routineId.jokes
    render json: routine
  end

  def show
    current_routine = Routine.find(params[:id])
    render json: current_routine
  end  

  def create
    routineId = params[:routine_id]
    jokeId = params[:joke_id]
    routineWithJoke = RoutineWithJoke.create!(routine_id: routineId, joke_id: jokeId)
    render json: routineWithJoke
  end

  def destroy
    routineId = params[:routine_id]
    jokeId = params[:joke_id]
    routineWithJoke = RoutineWithJoke.find_by(routine_id: routineId, joke_id: jokeId).destroy
  end

end


