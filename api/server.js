const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const BookStore = require("./models/BookModel");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

// mongoose connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log("Connected to database."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Welcome...");
});

app.get("/books", (req, res) => {
  BookStore.find().then((books) => res.json(books));
});

app.post("/newbook", async (req, res) => {
  try {
    const newBook = new BookStore({
      bookName: req.body.bookName,
      author: req.body.author,
      quantity: req.body.quantity,
      department: req.body.department,
    });

    const book = await newBook.save();
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  BookStore.findByIdAndDelete({ _id: id }, (err) => {
    if (!err) {
      console.log("Book has been deleted.");
    } else {
      console.log(err);
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
