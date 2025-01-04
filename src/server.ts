// import app from "./app";

// const port = 5000;

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });



import mongoose from 'mongoose'
import app from './app';


const port:number = 5000


const bootstrap = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017'); 
    app.listen(port, () => {
      console.log(`Connected to MongoDB and listening on ${port}`)
    })
  } catch (e) {
    console.error('Error connecting to MongoDB:', e);
  }
};

bootstrap();

