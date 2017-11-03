class PicturesController < ApplicationController
  def index
    @pictures = Picture.all
  end

  def new
  end

  def create
    @picture = Picture.new(picture_params)

    @picture.save
    redirect_to @picture

  end

  def show
    @picture = Picture.find(params[:id])
  end

  private
  def picture_params
    params.require(:picture).permit(:name)
  end
end
