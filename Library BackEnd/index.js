require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");
const userRoutes = require("./routes/userRoutes")
const authRoutes = require("./routes/authRoutes")
const { mongoose } = require("mongoose");
const cookieParser = require('cookie-parser')
//use cors for every routes
app.use(cors({
  credentials: true,
  origin: process.env.ENVIRONMENT === "development"
    ? ["http://localhost:5173", "http://localhost:5174"]
    : "https://libraria-frontend.netlify.app",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

//get body of requests
app.use(express.json());
app.use(cookieParser())

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);
app.use("/users", userRoutes)
app.use("/auth", authRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

main()
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_CONNECTION_STRING
  );

}
