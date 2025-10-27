import React from "react";

function ApiCall() {
  return (
    <>
      <div className="content-container">
        <h1>ApiCall</h1>
      </div>

      <table border={1}  cellPadding={5} cellSpacing={0} align="center" >
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>isActive</th>
                <th>CreateAt</th>
                <th>UpdateAt</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>sujee</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
      </table>
    </>
  );
}

export default ApiCall;
