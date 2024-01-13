const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../modules/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController =require("../controllers/listing.js");
const multer = require("multer");
const {storage} =require("../cloudConfig.js");
const upload = multer({ storage });



//Index Route
router.get("/", wrapAsync(listingController.index));

//new route
router.get("/new", isLoggedIn,listingController.renderNewForm);

//create
router.post("/",
     isLoggedIn, 
     upload.single('listing[image]'), 
     validateListing,
     wrapAsync(listingController.createListing)
    );


//show Route
router.get("/:id", wrapAsync(listingController.showListing));

//get
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));


//update
router.put("/:id", 
       isLoggedIn, 
       isOwner,
       upload.single('listing[image]'),  
       validateListing, 
       wrapAsync(listingController.updatelisting));

//delete
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

module.exports = router;