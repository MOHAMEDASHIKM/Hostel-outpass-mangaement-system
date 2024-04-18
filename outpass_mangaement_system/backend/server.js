const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://mmdashik955:1903@cluster0.mrv6bvg.mongodb.net/HOMS', { useNewUrlParser: true, useUnifiedTopology: true });


// =====data for signup and login =======================================
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
  typeofuser: String,
 
  // file: {
  //   data: Buffer, // Store binary data of the image
  //   contentType: String // Store the content type of the image (e.g., image/png, image/jpeg)
  // },
  isActive: Boolean,



});
const User = mongoose.model('User', userSchema);




// Modify your registration route in server.js
app.post('/Signup', async (req, res) => {
  try {
    // Check if the user is registering as an admin
    // const isAdmin = req.body.email === 'ashi12@gmail.com';
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const exUser = await User.findOne({email:req.body.email}) 
    if(exUser){
      return res.status(400);
    }
    console.log(req.body);

    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      age: req.body.age,
      typeofuser: req.body.typeofuser,
      // file: req.body.file,
      isActive: req.body.isActive,
      

      // Set the role as admin or user
    });
    console.log(user);
   
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      let token = jwt.sign({ user }, "ashik")
      res.json({ user, token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// =====data for signup for std and stdlogin =======================================


const userstdSchema = new mongoose.Schema({
  username: String,
  Admissionid: String,
  email: String,
  password: String,
  age: Number,
  userID:String,
  typeofuser: String,
  roomnumber: Number,
  contactnumber: Number,
  // file: {
  //   data: Buffer, // Store binary data of the image
  //   contentType: String // Store the content type of the image (e.g., image/png, image/jpeg)
  // },
  isActive: Boolean,

  department:String,


});
const Userstd = mongoose.model('Userstd', userstdSchema);




// Modify your registration route in server.js
app.post('/NewStd', async (req, res) => {
  try {
    console.log(req.body);
    // Check if the user is registering as an admin
    // const isAdmin = req.body.email === 'ashi12@gmail.com';
    const exUser = await Userstd.findOne({email:req.body.email}) 
    if(exUser){
      return res.status(400);
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    
    const userstdDetails =await  Userstd.create({
      username: req.body.username,
      Admissionid: req.body.Admissionid,
      email: req.body.email,
      password: hashedPassword,
      age: req.body.age,
      typeofuser: req.body.typeofuser,
      // file: req.body.file,
      isActive: req.body.isActive,
      roomnumber: req.body.roomnumber,
      contactnumber: req.body.contactnumber,
      userID:req.body.userID,
      department:req.body.department,
      // Set the role as admin or user
    });


    res.json({ userstdDetails });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.post('/loginstd', async (req, res) => {
  try {
    
    const userstd = await Userstd.findOne({ email: req.body.email });
    if (userstd && (await bcrypt.compare(req.body.password, userstd.password))) {
      let token = jwt.sign({ userstd }, "asee")
      res.json({ userstd, token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


//get the user datas

app.get('/profile/:_id', async (req, res) => {
  try {
    console.log("hi", req.params);
    const userdata = await Userstd.findById(req.params._id);



    res.json(userdata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// =========this code for admin page student list view=============


app.get('/stdlist', async (req, res) => {
  try {
    const userstd = await Userstd.find();
    res.json(userstd);
    // console.log(outpasses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// ==============data for new outpass apply =============
const outpassSchema = new mongoose.Schema({
  name: String,
  reason: String,
  destination: String,
  department: String,
  roomnumber: Number,
  admissionid: String,
  contact: Number,
  duration1: Date,
  duration2: Date,
  aproved: Boolean,
  status: String,
  userId: String,

});

const Outpass = mongoose.model('Outpass', outpassSchema);


// ============== new outpass and view outpass request backend=================================

app.post('/NoteForm', async (req, res) => {
  try {

    const outpassformData = await Outpass.create({
      name: req.body.name,
      reason: req.body.reason,
      destination: req.body.destination,
      department: req.body.department,
      roomnumber: req.body.roomnumber,
      admissionid: req.body.admissionid,
      contact: req.body.contact,
      duration1: req.body.duration1,
      duration2: req.body.duration2,
      isActive: req.body.isActive,
      aproved: false,
      status: "pending",
      userId: req.body.userId,

      // Set the role as admin or user
    });
    console.log(outpassformData);



    // await outpassformData.save();
    res.json({ outpassformData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



//get the datas


app.get('/outpass/:id', async (req, res) => {
  try {
    console.log("hi", req.params);
    const outpasses = await Outpass.find({ userId: req.params.id });
    res.json(outpasses);
    console.log(outpasses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/outpasses', async (req, res) => {
  try {
    const outpasses = await Outpass.find();
    res.json(outpasses);
    // console.log(outpasses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put('/outpass/:id', async (req, res) => {
  try {
    const outpassId = req.params.id;
    console.log(req.body);
    const updateOutPass = await Outpass.findByIdAndUpdate(outpassId, req.body, { new: true });
    if (!updateOutPass) {
      return res.status(404).json({ message: 'Outpass not found' });
    }
    res.json({ message: 'Outpass updated successfully', outpass: updateOutPass });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




// delete request =========================
app.delete('/outpasses/:id', async (req, res) => {
  try {
    const outpassId = req.params.id;
    const deletedOutpass = await Outpass.findByIdAndDelete(outpassId);
    if (!deletedOutpass) {
      return res.status(404).json({ message: 'Outpass not found' });
    }
    res.json({ message: 'Outpass deleted successfully', outpass: deletedOutpass });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




// ==============data for new events add =============
const eventsSchema = new mongoose.Schema({
  day: String,
  date: String,
  title: String,
  alte: String,

});

const Events = mongoose.model('Events', eventsSchema);


// ============== new outpass and view outpass request backend=================================

app.post('/adminhome', async (req, res) => {
  try {

    const eventsData = await Events.create({
      day: req.body.day,
      date: req.body.date,
      title: req.body.title,
      alte: req.body.alte,

      // Set the role as admin or user
    });
    // console.log(eventsData);



    
    res.json({ eventsData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



//get the event datas

app.get('/news', async (req, res) => {
  try {
    const eventsData = await Events.find();
    res.json(eventsData);
    // console.log(eventsData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete events =========================
app.delete('/news/:id', async (req, res) => {
  try {
    const deletedeventsId = req.params.id;
    const deletedEvents = await Events.findByIdAndDelete(deletedeventsId);
    if (!deletedEvents) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully', deletedevents: deletedEvents });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




app.get('/admin/users', async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }); // Exclude password field
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});






// mail code ================================================



// =============end

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`mongodb data contacted`);
});





