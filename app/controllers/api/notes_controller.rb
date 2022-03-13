class Api::NotesController < ApplicationController
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    render json: Note.all
  end

  def show
    render json: @note
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render json: @note
    else 
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end  
  end

  def destroy
    @note.destroy
    render json: { message: 'Note Deleted' }
  end 

  private 

    def note_params
    params.require(:note).permit(:number, :title, :body)
    end 

    def set_note
    @note = Chart.find(params[:id])
    end

end
