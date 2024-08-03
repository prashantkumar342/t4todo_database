import mongoose from "mongoose";
const dbConnect = (dburl, dbname) => {
  try {
    mongoose.connect(`${dburl}/${dbname}`)
    console.log('db connected succefuly')
  } catch (error) {
    console.log({ error: 'something went wrong with db connection' })
  }
}
export default dbConnect