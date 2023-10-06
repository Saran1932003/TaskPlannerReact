import React, { useState } from 'react'
import '../DashboardPage/Dashboard1.css'

import AnimImg from '../../assets/images/login/routine.gif';
import AnimImg1 from '../../assets/images/login/list.gif';
import AnimImg2 from '../../assets/images/login/upload.gif';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import {  Container, Card, InputGroup, Nav, Navbar, NavDropdown, Offcanvas, Col, Row } from 'react-bootstrap';
function NavBar() {
  // return (
  //   // <div className='navbar'>
  //   //   <span className='navbar-title'>My Task Manager</span>
  //   //   <div className='search'>
  //   //     <input type='text' placeholder='Search' />
  //   //     <button className='btn me-5'>Search</button>
  //   //   </div>
  //   // </div>
  // // );
}

export default function Dashboard1() {
  const calander = () => {
    window.location.href = "./calander";
  }
  const checkbox1 = () => {
    window.location.href = "./checkbox1";
  }
  const messagebox = () => {
    window.location.href = "./messagebox";
  }
  const login = () => {
    window.location.href = "./login";
  }
  const studentlogin = () => {
    window.location.href = "./studentlogin";
  }


  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [taskName, setTaskName] = useState('');
  const [file, setFile] = useState(null); // To store the selected file
  const [projectLink, setProjectLink] = useState('');
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setShow(false);
    // Reset input fields when modal is closed
    setName('');
    setEmail('');
    setTaskName('');
    setFile(null);
    setProjectLink('');
    setMessage('');
  };

  const handleShow = () => setShow(true);

  const handleFileChange = (e) => {
    // Handle file input change and store the selected file
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = () => {
    // Handle the form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Task Name:', taskName);
    console.log('File:', file); // You can upload this file to a server if needed
    console.log('Project Link:', projectLink);
    console.log('Message:', message);

    // Close the modal
    handleClose();
  };
  return (
    // <div>
       <div className='main'>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-outline-info navbar-dark mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="#">

              Task Manager
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              className="bg-dark color-white offCanvas"
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>

              </Offcanvas.Header>
              <Offcanvas.Body className=' bg-dark navbar-dark'>
                <Nav className="justify-content-end flex-grow-1 pe-3">


                  <Nav.Link>Assigned Task</Nav.Link>
                  <Nav.Link href="#action2">Progress</Nav.Link>
                  <Nav.Link>Calender and Timeline</Nav.Link>
                  <Nav.Link>Team Tasks</Nav.Link>
                  <Nav.Link onClick={messagebox}>Message Box</Nav.Link>
                  <Button variant="light" className='col-lg-11 logout'  onClick={studentlogin}>Logout</Button>{' '}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

      ))}
      <NavBar />
      <div className='page'>
        <h1 style={{ color: 'white', paddingTop: '5%' }}>Your Task Viewer</h1>
        <div className="row pages mt-5">
          <div className="gif col-lg-3 pt-1">
            <img src={AnimImg} style={{ height: '300px', width: '300px' }}></img>
            <h1 style={{ color: 'white' }}>View Your Task</h1>
            <button className='btn btn-primary' onClick={calander}>View</button>
          </div>
          <div className="gif col-lg-3 pt-1">
            <img src={AnimImg1} style={{ height: '300px', width: '300px' }}></img>
            <h1 style={{ color: 'white' }}>Update Progression</h1>
            <button className='btn btn-primary' onClick={checkbox1}>Update</button>
          </div>
          <div className="gif col-lg-3 pt-1">
            <img src={AnimImg2} style={{ height: '300px', width: '300px' }}></img>
            <h1 style={{ color: 'white' }}>Upload Documents</h1>

            <Button variant="primary" onClick={handleShow}>
              Upload
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Enter Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <Form.Group controlId="name">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="email">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="taskName">
                          <Form.Label>Task Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter the task name"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="file">
                          <Form.Label>Input File (Max 200MB)</Form.Label>
                          <Form.Control
                            type="file"
                            accept=".pdf, .doc, .docx, .txt, .zip"
                            onChange={handleFileChange}
                          />
                        </Form.Group>
                        <Form.Group controlId="projectLink">
                          <Form.Label>Project Link</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter project link"
                            value={projectLink}
                            onChange={(e) => setProjectLink(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group controlId="message">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Enter your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </Form.Group>
                      </div>
                    </div>
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}
