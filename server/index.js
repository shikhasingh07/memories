import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./router/posts.js";
import userRoutes from "./router/users.js";
import dotenv from "dotenv";
const app = express();
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb" }));
app.use(cors());
app.use("/posts", postRouter);
app.use("/user", userRoutes);
dotenv.config();

app.get("/", (req, res) => {
  res.send("Welcome To Memories Api");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
