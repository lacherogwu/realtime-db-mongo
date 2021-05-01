import mongoose from 'mongoose';
export default async uri => await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
