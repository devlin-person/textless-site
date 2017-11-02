category_cat = Category.create!(name: "cat")
category_dog = Category.create!(name: "dog")

cat_picture1 = Picture.create!(id: 1, name: "Cat", picture_path: "http://www.petmd.com/sites/default/files/sleepy-cat-125522297.jpg", category: "cat")
cat_picture2 = Picture.create!(id: 2, name: "Kitten", picture_path: "https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/", category: "cat")
dog_picture1 = Picture.create!(id: 3, name: "Dog", picture_path: "https://www.what-dog.net/Images/faces2/scroll004.jpg", category: "dog")
dog_picture2 = Picture.create!(id: 4, name: "Puppy", picture_path: "http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg", category: "dog")
