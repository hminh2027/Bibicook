const { faker } = require("@faker-js/faker");

function productPrototype() {
  return {
    name: "Bột ăn liền vị " + faker.animal.type(),
    shortDesc: "Mô tả ngắn " + faker.lorem.sentence(),
    longDesc: "Mô tả ngắn " + faker.lorem.paragraph(),
    ingredients: "Thịt gà, bột cà phê, nước lèo, rau câu",
    nutrition: "Chất béo, chất đạm, chất dinh dưỡng",
    useAge: "Cấm trẻ em dưới 18 tuổi",
    expiration: "10 tháng kể từ khi mua về",
    medias: [
      {
        url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        name: "fake image",
      },
      {
        url: "https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg",
        name: "another faker",
      },
    ],
  };
}

module.exports = productPrototype;
