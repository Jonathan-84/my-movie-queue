// see Signup.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

// integrate Apollo hooks
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';

const Demo = () => {
  const [userFormData, setUserFormData] = useState({ email:'demo1@hotmail.com', password:'TryIt' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ 
        ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
      event.preventDefault();

      // check if form has everything (as per react-bootstrap docs)
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      }

      try {
          // use LOGIN_USER mutation
          const { data } = await login({
              variables: userFormData
          });

          if (error) {
            throw new Error('something went wrong!');
          }

          const token = data.login.token;
      //    alert(token);
          Auth.login(token);
        } catch (err) {
          console.error(err);
          setShowAlert(true);
        }

      setUserFormData({
          username: '',
          email: '',
          password: '',
      });
  };

  
    return (
      <>
      <div className='col d-block'>
       <br></br>
      <p className='center text-white'>Just click Submit to test the site. The demo account credentials are already there.</p>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <div className='row mx-auto'>
        <Form.Group>
          <Form.Label className='text-white' htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>
</div>
<div className='row mx-auto'>
        <Form.Group>
          <Form.Label  className='text-white' htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        </div>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>

      <p className="center">Don't have an account with us yet?<br/><Link to="/signup" className="add-padding link-text bold-text">Create an Account</Link></p>
      </div>
    </>
  );
};
  
  export default Demo;