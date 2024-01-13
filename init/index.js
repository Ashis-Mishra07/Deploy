const mongoose=require("mongoose");
const initData=require("./data.js");

const Listing = require("../modules/listing.js");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust');
  }
  main()
    .then((res) => { console.log("Connected to DB"); })
    .catch(err => console.log(err));


const initDB=async (req,res)=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:'659ef690603e4cf076c02da6'}))
    await Listing.insertMany(initData.data);
    console.log("initialised");
}

initDB();