import mongoose from 'mongoose';
const URL_DATABASE =
  'mongodb+srv://helter:helter123@cluster0.jiaco1a.mongodb.net/?retryWrites=true&w=majority';
export const connectDB = async () => {
  try {
    await mongoose.connect(URL_DATABASE);
    console.log('Database connected');
  } catch (error) {
    console.log('Error en la DB:' + error);
  }
};
