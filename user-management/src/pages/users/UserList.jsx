import React from "react";
import { AddUser } from "./AddUser";

export const UserList = () => {
  return (
    <div className="row d-flex mt-4">
      <div className="col-md-10 fw-bold">User Managemet</div>
      <div className="d-flex col-md-2 justify-content-end">
        <AddUser />
      </div>

      <div className="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
