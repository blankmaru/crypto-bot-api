import express from "express";
import mongoose from 'mongoose';
import * as dotenv from "dotenv";
dotenv.config();

const app : express.Application = express()

const db = process.env.MONGO_URI || '';
const port = process.env.PORT;

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}, () => console.log('MONGODB CONNECTED'))

app.use(express.json());

import user_routes from './routes/user.routes';
import question_routes from './routes/question.route';

app.use('/api/users', user_routes);
app.use('/api/questions', question_routes);

app.listen(port);
