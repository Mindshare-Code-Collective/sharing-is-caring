import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
       dbName: "sharing_is_caring",
       useNewUrlParser: true,
       useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to the DB succesully');
      })
    .catch((err) => {
        console.log(`DB connection err:, ${err}`);
      });
};

const localConn = () => {
  mongoose.connect(process.env.DB_URI_LOCAL, {
    dbName: process.env.DB_NAME/* "sharing_is_caring" */,
    useNewUrlParser: true,
    useUnifiedTopology: true,
 })
 .then(() => {
     console.log('Connected to the DB successfully');
   })
 .catch((err) => {
     console.log(`DB connection err:, ${err}`);
   });
};

export { conn, localConn };

