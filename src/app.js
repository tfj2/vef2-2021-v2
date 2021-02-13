import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const {
  PORT: port = 3000,
} = process.env;

const app = express();

app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res)=> {
  res.send(
    'Hello World'
  )

})


app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
