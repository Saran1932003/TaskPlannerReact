import React from 'react';
import '../LoginPage/Login.css';
import { Form, Button, InputGroup, Col } from 'react-bootstrap';
import Google from '../../../src/assets/images/login/google.png';
import Facebook from '../../assets/images/login/facebook.png';
import { useState } from 'react';
export default function Login() {
  const [formData, setFormData] = useState({
    email:'',
    password: ''
  });
  console.log(formData);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const dashBoard = async () => {
    try {
      if (formData.email.includes('@admin')) {
        const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: formData.email, password: formData.password }),
        });
  
        if (response.status === 200) {
          // Authentication successful, you can redirect to the dashboard
          window.location.href = "/dashboard";
        } else {
          alert('Authentication failed. Check your email and password.');
        }
      } else {
        alert('Access denied. Only admins are allowed.');
      }
    } catch (error) {
      console.error('An error occurred during authentication:', error);
      alert('An error occurred during authentication. Please try again later.');
    }
  };

  const studentlogin = () => {
    window.location.href = "/studentlogin"
  }


    
   
    
    const userData = {
      email: formData.email,
      password: formData.password
    };

  const continueWithFacebook = () => {
    // Replace this URL with the actual Facebook login URL
    const facebookLoginUrl = "https://www.facebook.com/login"; // Example URL

    // Open the Facebook login page in a new tab/window
    window.open(facebookLoginUrl, "_blank");
  };

  const continueWithGoogle = () => {
    // Replace this URL with the actual Google sign-in URL
    const googleSignInUrl = "https://accounts.google.com"; // Example URL

    // Open the Google sign-in page in a new tab/window
    window.open(googleSignInUrl, "_blank");
  };
  

  return (
    
    <div className='loginBody'>
      <div className="container">
        <div className="cards col-lg-6">
          <div className="row">
          
            <Form>
              <h4 className="heading mb-4">ADMIN TASK ASSIGNER</h4>
              <Button
                className='col-lg-12 btns mb-3'
                variant="dark"
                onClick={continueWithFacebook}
              >
                <img
                  alt=""
                  src={Facebook}
                  width="25"
                  height="25"
                  className="d-inline-block align-top"
                />{' '}
                Continue With Facebook
              </Button>{' '}
              <Button
                className='col-lg-12 btns mb-3'
                variant="dark"
                onClick={continueWithGoogle}
              >
                <img
                  alt=""
                  src={Google}
                  width="25"
                  height="25"
                  className="d-inline-block align-top"
                />{' '}
                Continue With Google
              </Button>{' '}
              <Form.Label className='col-lg-12 mb-3'>or continue with your email</Form.Label>
              <InputGroup >
                <Col lg={12} className="mx-auto mb-3">
                  <Form.Control
                    placeholder="Username or email"
                    value={formData.email}
                    name="email"
                    onChange={handleInputChange}
                  />
                </Col>
              </InputGroup>
              <InputGroup>
                <Col lg={12} className="mx-auto mb-3">
                  <Form.Control
                    placeholder="Password"
                    value={formData.password}
                    name="password"
                    onChange={handleInputChange}
                  />
                </Col>
              </InputGroup>
              <Form.Label className='col-lg-12 mb-3'>Forgot your password?</Form.Label>
              <Button className='col-lg-12 btns mb-3' variant='warning' onClick={dashBoard}>Continue</Button>{' '}
              <div className="App">
      <Form.Label >
        {/* For Student Login .... */}
        {/* <Button 
        //   variant="primary"  // Set the button variant to "link" for a button-like link
          // onClick={() => {window.location.href = '/D';}}
        //   onClick={studentlogin}
        >
          {/* For Student Login Click Here */}
        {/* </Button> */}
      </Form.Label>
      <Form.Label>
                  <Button
                    variant="primary"
                    onClick={studentlogin}
                  >
                    For Student Login Click Here
                  </Button>
                </Form.Label>
    </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
// const SVGButton = ({ onClick }) => {
//   return (
//     <button className="svg-button" onClick={onClick}>
//       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill svg-icon" viewBox="0 0 16 16">
//         <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
//       </svg>
//       Click Me
//     </button>
//   );
// };
