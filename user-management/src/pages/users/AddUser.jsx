import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createNewUser, editUserInfo } from "../../store/slices/userSlice";

export const AddUser = ({
  toggle,
  isModalShow,
  updateUser,
  user,
  index,
  isEdit,
  setIsEdit,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    updateUser(user);
  }, [user, isEdit]);

  const userOnChangeHandler = (e) => {
    updateUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    updateUser({ name: "", email: "", comments: "" });
    toggle(false);
    setIsEdit(false);
  };

  const createUser = () => {
    if (!isEdit) {
      dispatch(createNewUser(user));
    } else {
      dispatch(editUserInfo({ index, data: user }));
    }
    resetForm();
  };

  return (
    <>
      <Modal show={isModalShow} onHide={resetForm}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Edit" : "Add"} User</Modal.Title>
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
          <Button variant="secondary" onClick={resetForm}>
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
