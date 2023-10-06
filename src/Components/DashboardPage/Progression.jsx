import React from 'react';
import Form from 'react-bootstrap/Form';
import './Progression.css';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

function Progression() {
  return (
    
    <div className="progression-container">
        <Dropdown>
          {/* Task Updation                               */}
      <Dropdown.Toggle className='dropdown mt-5' variant="outline-info" id="dropdown-basic">
        Select Project
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Project 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Project 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Project 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <div className="col-lg-5" style={{ margin: '50px' }}>
        <table className="table table-bordered col-lg-6">
          <thead>
            <tr>
              <th scope="col" colSpan={2}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Check
                  type="switch"
                  id="custom-switch-todo"
                />
              </td>
              <td>
                ToDo
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check
                  type="switch"
                  id="custom-switch-inprogress"
                />
              </td>
              <td>
                InProgress
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check
                  type="switch"
                  id="custom-switch-completed"
                />
              </td>
              <td>
                Completed
              </td>
            </tr>
            <tr>
              <td colSpan={2}><Button className='btn' variant='outline-dark'>Update Progress</Button></td>
            </tr>
          </tbody>
          
        </table>
      </div>
    </div>
  );
}

export default Progression;
