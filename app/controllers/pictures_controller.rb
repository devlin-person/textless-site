class PicturesController < ApplicationController
  def index
    @pictures = Picture.all
  end

  def new
    @picture = Picture.new
    @category_ids = Category.all
  end

  def create
    @picture = Picture.new(picture_params)

    @picture.save
    redirect_to @picture
  end

  def show
    @picture = Picture.find(params[:id])
    @category = Category.find(params[:id])
  end

  private
  def picture_params
    params.require(:picture).permit(:name, category_ids: [])
  end
end
