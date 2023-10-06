import React, { useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import '../DashboardPage/Dashboard.css';
// import CustomButton from '../CustomButton';
// import CustomInput from '../CustomInput';
import Header from '../Header';

import 'react-datepicker/dist/react-datepicker.css';

import { Button, Container, Card, Form, InputGroup, Nav, Navbar, NavDropdown, Offcanvas, Col, Row } from 'react-bootstrap';

import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';





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

function CarouselComponent({ Tasks, onDelete, onComplete }) {
  return (
    <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
      {Tasks.map((t) => (
        <div key={t.id}>
          <h3>{t.task}</h3>
          <p>{t.des}</p>
          {/* <p>{t.startDate}</p> */}

          <div className='btnwrapper'>
            <button className="btn btn-danger col-lg-3 ms-3" onClick={() => onDelete(t.id)}>Delete Task</button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

function App() {
  const [add, setAdd] = useState(false);
  const [Tasks, setTasks] = useState([]);
  const [singleTask, setSingleTask] = useState('');
  const [singleDes, setSingleDes] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [assignedEmail, setAssignedEmail] = useState('');

  const UpdateTask = (id) => {
    setTasks(Tasks.map((t) => (t.id === id ? { ...t, complete: true } : t)));
  };

  const deleteTask = (id) => {
    setTasks(Tasks.filter((t) => t.id !== id));
  };

  const addToCard = () => {
    const id = Tasks.length === 0 ? 1 : Tasks.length + 1;
    const taskDetail = {
      id: id,
      task: singleTask,
      des: singleDes,
      complete: false,
      startDate: startDate,
      endDate: endDate,
      assignedEmail: assignedEmail,
    };

    if (singleTask && singleDes && startDate && endDate && assignedEmail) {
      setTasks([...Tasks, taskDetail]);
      ClearInput();
    } else {
      alert('Please fill in all fields.');
    }
  };

  const ClearInput = () => {
    setSingleTask('');
    setSingleDes('');
    setStartDate(null);
    setEndDate(null);
    setAssignedEmail('');
    setAdd(false);
  };

  const handleCustomTask = (event) => {
    setSingleTask(event.target.value);
  };

  const handleCustomDes = (event) => {
    setSingleDes(event.target.value);
  };

  const handleInput = () => {
    setAdd(!add);
  };

  const handleAssignedEmail = (event) => {
    setAssignedEmail(event.target.value);
  };
  const calander = () => {
    window.location.href = "./calander";
  }
  const messagebox = () => {
    window.location.href = "./messagebox";
  }
  const login = () => {
    window.location.href = "./login";
  }

  return (
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
                  <Button variant="light" className='col-lg-11 logout'  onClick={login}>Logout</Button>{' '}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

      ))}
      <NavBar />
      <Row className='contentsTask'>
        <Col lg={5}>
          <div className='inputSection'>
            <Header handleInput={handleInput} />
            {add === true ? (
              <div className='over col-lg-10'>
                <label>Task</label>
                <input
                  placeholder='Enter task'
                  value={singleTask}
                  onChange={handleCustomTask}
                />
                <label>Task Description</label>
                <input
                  placeholder='Enter task description'
                  value={singleDes}
                  onChange={handleCustomDes}
                />
                <label>Start Date: </label>
                <input
                  type='date'
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                <label className='enddate'>End Date: </label>
                <input
                  type='date'
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
                <label>Assign task to: </label>
                <input
                  type='text'
                  placeholder='Assign Task to Email'
                  value={assignedEmail}
                  onChange={handleAssignedEmail}
                />

                <div className="row btnsss">
                  <div className="col-lg-3 mt-5">
                    <button onClick={ClearInput} className='btn btn-dark col-lg-12'>
                      Cancel
                    </button>

                  </div>
                  <div className="col-lg-3 mt-5">
                    <DropdownButton className='drop' id="dropdown-basic-button" title="Prioritize the Task">
                      <Dropdown.Item href="#/action-1">Do First</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Do Later</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Delegate</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Eliminate</Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="col-lg-3 ms-5 mt-5">

                    <button
                      onClick={addToCard}
                      className='btn btn-primary'
                    >
                      Add Task
                    </button>
                  </div>


                </div>
              </div>
            ) : null}

          </div>

        </Col>


        <Col lg={5}>
          <div className="section1">
            <button className='btn btn-primary mb-3  ms-5 me-5' onClick={calander}>View Assigned Tasks</button>
            <Card style={{ width: '40rem' }} classname='progress mb-20'>
              {/* <button className='btn btn-primary mt-2 ms-5 me-5' onClick={calander}>View Assigned Tasks</button> */}
              <Card.Img />
              <Card.Body className='top'>
                <Card.Title>Search</Card.Title>
                <Navbar className="bg-body-tertiary justify-content-between">
                  <Form >
                    <InputGroup>
                      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                      <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Form>
                  <Form inline>
                    <Row>
                      <Col xs="auto">
                        <Form.Control
                          type="text"
                          placeholder="Search Task"
                          className=" mr-sm-2"
                        />
                      </Col>
                      <Col xs="auto">
                        <Button type="submit">Submit</Button>
                      </Col>
                    </Row>
                  </Form>
                </Navbar>
                {/* <Card.Text>
                    Discription
                  </Card.Text> */}
              </Card.Body>
              <ListGroup className="list-group-flush">
                <div className="row todo">
                  <h5 className='col-lg-6'>Todo</h5>
                  <div className="col-lg-6">
                    <Form.Check
                      type="switch"
                      id="custom-switch" className='sw'
                    />
                  </div>
                </div>
                <div className="row todo">
                  <h5 className='col-lg-6'>In Progress</h5>
                  <div className="col-lg-6">
                    <Form.Check
                      type="switch"
                      id="custom-switch" className='sw'
                    />
                  </div>
                </div>
                <div className="row todo">
                  <h5 className='col-lg-6'>Completed</h5>
                  <div className="col-lg-6">
                    <Form.Check
                      type="switch"
                      id="custom-switch" className='sw'
                    />
                  </div>
                </div>



              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Task Link</Card.Link>
                <Card.Link href="#">Message</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className='cardSection'>

            <CarouselComponent
              Tasks={Tasks}
              onDelete={deleteTask}

              className="mb-5"
            />
          </div>


        </Col>
      </Row>
    </div>


  );
}

export default App;

