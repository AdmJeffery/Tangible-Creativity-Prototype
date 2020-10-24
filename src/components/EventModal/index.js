import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './style.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(63, 50, 50)'
    }
};

export default function EventModal() {
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function saveEvent() {
        //   save event to calendar
    }

    return (
        <div className="ml-5">
            <button onClick={openModal}>Add Event</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Event Modal"
            // className="modal modal-content"
            >

                <h2 ref={_subtitle => (subtitle = _subtitle)} class="modal-title">Add an Event</h2>
                <div className="form-group">
                    <label for="" class="modal-label">Event Title</label>
                    <input type="text"
                        className="form-control" name="" id="" aria-describedby="helpId" placeholder=""></input>
                    <label for="" class="modal-label">Start Date</label>
                    <input type="date"
                        className="form-control" name="" id="" aria-describedby="helpId" placeholder=""></input>
                    <label for="" class="modal-label">End Date</label>
                    <input type="date"
                        className="form-control" name="" id="" aria-describedby="helpId" placeholder=""></input>
                    <button onClick={closeModal}>close</button>
                    <button onClick={saveEvent}>save</button>

                </div>
            </Modal>
        </div>
    );
}


