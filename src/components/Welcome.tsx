import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function Welcome(): JSX.Element{
  
    const [visible, setVisible] = React.useState<boolean>(true);

    const handleClick = () => setVisible(false);
    

    return (
        <Modal show={visible}>
            <Modal.Header closeButton>
                <Modal.Title>Welcome to the Game!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>We hope you enjoy it. Click close to exit this prompt.</div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClick}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}