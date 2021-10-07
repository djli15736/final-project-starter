import React from "react";
import Modal from "react-bootstrap";

export default function Welcome(): JSX.Element{

    return (

        <div className="modal" tabIndex={1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Welcome to The Game!</h5>
                    </div>
                    <div className="modal-body">
                        <p>Enjoy playing the Game</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    );
}