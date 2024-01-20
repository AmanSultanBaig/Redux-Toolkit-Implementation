import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import { AddUser } from "./AddUser";

export const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", comments: "" });

  const updateUser = (newUserData) => {
    setUser(newUserData);
  };

  const getUser = (user, i) => {
    setUser(user);
    setShow(true);
    setIndex(i);
    setIsEdit(true);
  };

  return (
    <div className="row d-flex mt-4">
      <div className="col-md-10 fw-bold">User Managemet</div>
      <div className="d-flex col-md-2 justify-content-end">
        <Button
          variant="secondary"
          className="btn btn-sm"
          onClick={() => setShow(true)}
        >
          Add User
        </Button>{" "}
      </div>

      <div className="col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name </th>
              <th scope="col">Email</th>
              <th scope="col">Comments</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!users?.length ? <h3 className="mt-2">No Record</h3> : null}
            {users.map((user, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.comments || "N / A"}</td>
                <td>
                  <button
                    onClick={() => getUser(user, i)}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </button>{" "}
                  &nbsp;
                  <button
                    onClick={() => dispatch(removeUser(i))}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddUser
        user={user}
        updateUser={updateUser}
        isModalShow={show}
        index={index}
        isEdit={isEdit}
        toggle={() => setShow(!show)}
        setIsEdit={setIsEdit}
      />
    </div>
  );
};
