class RoutinesController < ApplicationController
  def index
    routines = Routine.all
    render json: routines
  end 

  def show
    routine = Routine.find(params[:id])
    render json: routine
  end

  def create
    routine = Routine.create!(routine_params)
    render json: routine
  end

  def update
    routine = Routine.find(params[:id])
    routine.update!(routine_params)
    render json: routine
  end

  def destroy
    routine = Routine.find(params[:id])
    routine.destroy!
    render plain: "Routine deleted ... it sucked anyway"
  end

  private

  def routine_params
    params.require(:routines).permit(:name, :estimated_length)
  end

end

