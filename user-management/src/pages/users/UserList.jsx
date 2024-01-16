import React from "react";
import { AddUser } from "./AddUser";

export const UserList = () => {
  return (
    <div className="row d-flex mt-4">
      <div className="col-md-10 fw-bold">User Managemet</div>
      <div className="d-flex col-md-2 justify-content-end">
        <AddUser />
      </div>

      {/* <div className="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
};
