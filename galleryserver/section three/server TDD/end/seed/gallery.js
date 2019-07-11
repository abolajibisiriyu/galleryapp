const Gallery = require("../src/api/gallery/model");

const images = [
  {
    src: "https://assets.rbl.ms/14070612/980x.jpg",
    description: "this is a description"
  },
  {
    src:
      "https://qph.fs.quoracdn.net/main-qimg-8955c949110d710421c1b4ea89caf33c-c",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/45175/hirsch-forest-wild-fallow-deer-45175.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/302820/pexels-photo-302820.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/22138/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/457713/pexels-photo-457713.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/534263/pexels-photo-534263.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/279376/pexels-photo-279376.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/376533/pexels-photo-376533.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/355904/pexels-photo-355904.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/35016/soap-bubble-colorful-ball-soapy-water.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/32997/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/729005/pexels-photo-729005.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  },
  {
    src:
      "https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    description: "this is a description"
  }
];

const cleanDB = async () => {
  var cleanPromises = await Gallery.deleteMany({});

  return cleanPromises;
};

const saveImages = async () => {
  try {
    images.map(async image => {
      let new_gallery = new Gallery(image);
      new_gallery.save();
    });
  } catch (e) {
    console.log({ e });
  }
};

cleanDB()
  .then(saveImages)
  .catch(err => log.error(err));

exports.images = images;
