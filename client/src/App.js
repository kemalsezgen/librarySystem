import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AddBook from "./components/AddBook";
import Books from "./components/Books";
import MusicCategory from "./components/MusicCategory";
import HistoryCategory from "./components/HistoryCategory";
import ReligiousCategory from "./components/ReligiousCategory";
import TeachingCategory from "./components/TeachingCategory";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  const [book, setBook] = useState({
    bookName: "",
    author: "",
    quantity: "",
    department: "",
  });

  useEffect(() => {
    fetch("/books")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setBooks(jsonRes));
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const addBook = (e) => {
    e.preventDefault(); // her basıldığında ekranın yenilenmesini engelle
    const newBook = {
      bookName: book.bookName,
      author: book.author,
      quantity: book.quantity,
      department: book.department,
    };

    axios.post("/newbook", newBook);
    alert(`${book.bookName} added.`);
    setBook({ bookName: "", author: "", quantity: "", department: "" });
  };

  const deleteBook = (id) => {
    axios.delete("/delete/" + id);
    alert(`The book with id ${id} id deleted`);
  };

  const lendBook = (id) => {
    const tempBook = books.find((book) => book._id === id);
    if (tempBook.quantity > 0){
      axios.put("/lend/" + id);
      alert(`The book with id ${id} id lended`);
    } else {
      alert(`Count of ${tempBook.bookName} is 0.`)
    }
  };

  const backBook = (id) => {
    axios.put("/back/" + id);
    //alert(`The book with id ${id} id back`);
    alert(`${books.find((book) => book._id === id).bookName} is back.`);
  };

  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Kemal Library System
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Books
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addbook">
                    Add Book
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Departments
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/history">
                        History
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/religious">
                        Religious
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/music">
                        Music
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/studyteaching">
                        Study & Teaching
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Books
                books={books}
                lendBook={lendBook}
                deleteBook={deleteBook}
                backBook={backBook}
              />
            }
          />
          <Route
            path="/addbook"
            element={
              <AddBook
                book={book}
                handleChange={handleChange}
                addBook={addBook}
              />
            }
          />
          <Route
            path="/music"
            element={
              <MusicCategory
                books={books.filter((book) => {
                  return book.department === "Music";
                })}
              />
            }
          />
          <Route
            path="/history"
            element={
              <HistoryCategory
                books={books.filter((book) => {
                  return book.department === "History";
                })}
              />
            }
          />
          <Route
            path="/religious"
            element={
              <ReligiousCategory
                books={books.filter((book) => {
                  return book.department === "Religious";
                })}
              />
            }
          />
          <Route
            path="/studyteaching"
            element={
              <TeachingCategory
                books={books.filter((book) => {
                  return book.department === "Study & Teaching";
                })}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
