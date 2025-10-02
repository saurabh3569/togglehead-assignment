import React from "react";

const CategoryList = ({ categories }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((cat) => (
          <tr key={cat._id}>
            <td>{cat.name}</td>
            <td>{cat.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryList;
