import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../store/slices/userSlice";

export const AddUser = ({ toggle, isModalShow }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({ name: "", email: "", comments: "" });

  const userOnChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setUser({ name: "", email: "", comments: "" });
  };

  const createUser = () => {
    dispatch(createNewUser(user));
    toggle(false);
    resetForm();
  };

  return (
    <>
      <Modal show={isModalShow} onHide={() => toggle(false)}>
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
                value={user.name}
                type="text"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                value={user.email}
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
                value={user.comments}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggle(false)}>
            Close
          </Button>
          <Button
            disabled={!user.name || !user.email}
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
