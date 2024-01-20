import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../store/slices/userSlice";

export const AddUser = ({ toggle, isModalShow, updateUser, user }) => {
  const dispatch = useDispatch();
  const [localUser, setLocalUser] = useState({
    name: "",
    email: "",
    comments: "",
  });

  useEffect(() => {
    setLocalUser(user);
  }, [user]);

  const userOnChangeHandler = (e) => {
    updateUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setLocalUser({ name: "", email: "", comments: "" });
    toggle(false);
  };

  const createUser = () => {
    dispatch(createNewUser(user));
    resetForm();
  };

  return (
    <>
      <Modal show={isModalShow} onHide={resetForm}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                onChange={userOnChangeHandler}
                name="name"
                value={localUser.name}
                type="text"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                value={localUser.email}
                type="email"
                onChange={userOnChangeHandler}
                name="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comments</Form.Label>
              <Form.Control
                onChange={userOnChangeHandler}
                name="comments"
                value={localUser.comments}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={resetForm}>
            Close
          </Button>
          <Button
            disabled={!localUser.name || !localUser.email}
            variant="primary"
            onClick={createUser}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
