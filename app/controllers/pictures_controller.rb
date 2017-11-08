class PicturesController < ApplicationController
  def index
    @pictures = Picture.all
  end

  def new
    @picture = Picture.new
    @category_collection = Category.all
  end

  def create
    binding.pry
    @picture = Picture.new(picture_params)
    @picture.categories = Category.where(id: params[:picture][:category_ids])

    @picture.save
    redirect_to @picture

  end

  def show
    @picture = Picture.find(params[:id])
  end

  private
  def picture_params
    params.require(:picture).permit(:name, :category)
  end
end
