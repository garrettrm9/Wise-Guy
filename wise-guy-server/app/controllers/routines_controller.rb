class RoutinesController < ApplicationController
  def index
    routines = Routine.all
    render json: routines
  end 

  def show
    # routine = Routine.find(params[:id])
    # render json: routine
    current_user = User.find(params[:id])
    routines = current_user.routines
    render json: routines
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

  # def user_routines 
  #   current_user = User.find(params[:user_id])
  #   routines = current_user.routines
  #   render json: routines
  # end

  private

  def routine_params
    params.require(:routines).permit(:name, :estimated_length, :user_id)
  end

end

