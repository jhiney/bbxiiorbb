import React, {  useState } from 'react';
import {Button, Modal} from 'react-bootstrap'

export default function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Settings Modal
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal Body</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Secondary
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Primary
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  