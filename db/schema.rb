# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171021204119) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "picture_category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["picture_category_id"], name: "index_categories_on_picture_category_id"
  end

  create_table "picture_categories", force: :cascade do |t|
    t.bigint "category_id", null: false
    t.bigint "picture_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_picture_categories_on_category_id"
    t.index ["picture_id"], name: "index_picture_categories_on_picture_id"
  end

  create_table "pictures", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_pictures_on_category_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.boolean "admin?", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
