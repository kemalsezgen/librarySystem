import React from "react";

export default function MusicCategory({books}) {
  return (
    <div className="container mt-5">
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author</th>
            <th scope="col">Department</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr key={index}>
                <td>{book._id}</td>
                <td>{book.bookName}</td>
                <td>{book.author}</td>
                <td>{book.department}</td>
                <td>{book.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
