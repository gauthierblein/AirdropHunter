import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';



// Routes
import postRoute from './routes/postRoute.js'
import userRoute from './routes/userRoute.js'
import airdropRoute from './routes/airdropRoute.js'

/* CONFIGURATIONS */

dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use Helmet!
app.use(helmet());

// Middleware
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

/* MONGOOSE SETUP */
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  ) .catch((error) => console.log(error));



/* ROUTES */
app.use('/', postRoute)
app.use('/', userRoute)
app.use('/', airdropRoute)





