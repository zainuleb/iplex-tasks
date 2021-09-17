import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import styles from './EditUserForm.css';

import allActions from '../../actions';
import { useDispatch } from 'react-redux';

const EditUserForm = (props) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(allActions.empActions.editEmployee(user));
        props.setEditing(false);
      }}
      class=".flex-column .justify-content-center p-2 mw-50"
      style={{ maxWidth: '50%', margin: '0 auto' }}
    >
      <Row class="mx-3">
        <Col class="m-2 px-1 mx-1">
          <Form.Control
            class="w-25 mx-3"
            placeholder="Name"
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row class="mx-3">
        <Col class="m-2 px-1 mx-1">
          <Form.Control
            class="w-25  mx-3 "
            placeholder="Email"
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row class="mx-3">
        <Col class="my-3">
          <Button variant="primary outline-dark" size="lg" type="submit">
            Update
          </Button>
        </Col>
        <Col class="my-3">
          <Button
            variant="primary outline-dark"
            size="lg"
            type="submit"
            onClick={() => props.setEditing(false)}
          >
            Cancel
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default EditUserForm;
