import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.LOCAL_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`Database connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
