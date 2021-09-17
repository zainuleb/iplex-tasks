import React, { useState } from 'react';
import styles from './Input.module.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import allActions from '../../actions';
import { useDispatch } from 'react-redux';

const Input = () => {
  const dispatch = useDispatch();

  const clearData = () => {
    setInput({
      id: '',
      name: '',
      email: '',
    });
  };

  const [input, setInput] = useState({
    id: Math.random().toString(),
    name: '',
    email: '',
  });

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(allActions.empActions.addEmployee(input));
    clearData();
  };

  return (
    <>
      <h2 class="display-6">Add Employee</h2>
      <Form
        onSubmit={submitHandler}
        class=".flex-column .justify-content-center p-2 mw-50"
        style={{ maxWidth: '50%', margin: '0 auto' }}
      >
        <Row class="m-2">
          <Col class="m-2 p-1">
            <Form.Control
              class="w-25"
              placeholder="Name"
              name="name"
              type="text"
              value={input.name}
              onChange={changeHandler}
            />
          </Col>
        </Row>
        <Row class="m-2">
          <Col class="m-2 p-1">
            <Form.Control
              class="w-25 "
              placeholder="Email"
              name="email"
              type="text"
              value={input.email}
              onChange={changeHandler}
            />
          </Col>
        </Row>
        <Row class="m-3">
          <Col>
            <Button variant="primary outline-dark" size="lg" type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Input;
