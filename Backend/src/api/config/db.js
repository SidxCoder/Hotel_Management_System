import mongoose from "mongoose"
import AWS from "aws-sdk"
import env from "../../infrastructure/env.js"
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyB9Cc3zVvGLLjHO_xdDygkvzEgRdmSXvLk",
//   authDomain: "hotelmanagement-b2a5e.firebaseapp.com",
//   projectId: "hotelmanagement-b2a5e",
//   storageBucket: "hotelmanagement-b2a5e.firebasestorage.app",
//   messagingSenderId: "336078865044",
//   appId: "1:336078865044:web:5d7f7019b399b0a9c3aa81",
//   measurementId: "G-WJCVYPE7D8"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

AWS.config.update({ 
    accessKeyId: env.AWS_ACCESS_ID, 
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY, 
    region: 'ap-south-1' 
});


export const s3 = new AWS.S3()
async function dbConnection(){
    await mongoose .connect(env.MONGO_URL)
    .then(()=>{
        console.log("mongo database connected");
        
    })
    .catch((err)=>{
        console.log("Error while connecting mongoose",err);
        
    })
}
export default dbConnection