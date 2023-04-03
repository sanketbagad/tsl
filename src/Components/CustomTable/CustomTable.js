import React from "react";

const CustomTable = ({ data, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Brief Description</th>
          <th>Observation Type</th>
          <th>Person ID</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.briefDescription}</td>
            <td>{item.observationType}</td>
            <td>{item.personId}</td>
            <td>
              <button onClick={() => onEdit(item.id)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
