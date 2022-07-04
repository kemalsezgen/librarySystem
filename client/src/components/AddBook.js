import React from "react";

export default function AddBook({book, handleChange, addBook}) {
  return (
    <div>
      <div className="container w-50 mt-5 border border-secondary">
        <form style={{ padding: "15px 15px 10px 15px" }}>
          <div class="form-floating mb-3">
            <input
              type="text" value={book.bookName} onChange={handleChange}
              name="bookName"
              class="form-control"
              id="floatingInput"
              placeholder="bookName"
            />
            <label for="floatingInput">Book Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text" value={book.author} onChange={handleChange}
              name="author"
              class="form-control"
              id="floatingInput"
              placeholder="author"
            />
            <label for="floatingInput">Author</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="number" value={book.quantity} onChange={handleChange}
              name="quantity"
              class="form-control"
              id="floatingInput"
              placeholder="quantity"
            />
            <label for="floatingInput">Quantity</label>
          </div>
          <div class="form-floating mb-3">
            <select
              class="form-select" value={book.department} onChange={handleChange}
              id="floatingSelect" name="department"
              aria-label="Floating label select example"
            >
              <option value="History">History</option>
              <option value="Religious">Religious</option>
              <option value="Music">Music</option>
              <option value="Study & Teaching">Study & Teaching</option>
            </select>
            <label for="floatingSelect">Works with selects</label>
          </div>
          <button type="button" onClick={addBook} class="btn btn-primary">Add Book</button>
        </form>
      </div>
    </div>
  );
}
