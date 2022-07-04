import React from "react";

export default function AddBook() {
  return (
    <div>
      <div className="container w-50 mt-5 border border-secondary">
        <form style={{ padding: "15px 15px 10px 15px" }}>
          <div class="form-floating mb-3">
            <input
              type="text"
              name="bookName"
              class="form-control"
              id="floatingInput"
              placeholder="Book Name"
            />
            <label for="floatingInput">Book Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              name="author"
              class="form-control"
              id="floatingInput"
              placeholder="Book Name"
            />
            <label for="floatingInput">Author</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="number"
              name="quantity"
              class="form-control"
              id="floatingInput"
              placeholder="Book Name"
            />
            <label for="floatingInput">Quantity</label>
          </div>
          <div class="form-floating mb-3">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option value="History" selected>History</option>
              <option value="Religious">Religious</option>
              <option value="Music">Music</option>
              <option value="Study & Teaching">Study & Teaching</option>
            </select>
            <label for="floatingSelect">Works with selects</label>
          </div>
          <button type="button" class="btn btn-primary">Add Book</button>
        </form>
      </div>
    </div>
  );
}
