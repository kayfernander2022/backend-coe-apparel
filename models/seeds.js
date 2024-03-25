const mongoose = require('./connection')
const Tshirt = require('./tshirt')

mongoose.connection.on('open',()=>{
  const starterTshirts=[
    { name: "Lion", description: "Simple coe logo", price: 19.99, image:"", category: "women", new:true},
    { name: "City", description: "Simple coe logo", price: 29.99, image:"", category: "women", new:false},
    { name: "Front to Back", description: "Simple coe logo", price: 24.99, image:"", category: "men",new:true},
    { name: "COE Decal", description: "Simple coe logo", price: 27.99, image:"", category: "men", new:false},
    { name: "Long Sleeve", description: "Simple coe logo", price: 34.99, image:"", category: "men", new:false},
    
  ]
  Tshirt.deleteMany({})
  .then(() => {
    return Tshirt.create(starterTshirts);
  })
  .then((tshirt) => {
    console.log('created +' + tshirt);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error:', err);
    mongoose.connection.close();
  });

})
