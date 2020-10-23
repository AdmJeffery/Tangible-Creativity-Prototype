import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
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
        <div>
            <button onClick={openModal}>Add Event</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Event Modal"
            >

                <h2 ref={_subtitle => (subtitle = _subtitle)}>Add an Event</h2>
                <button onClick={closeModal}>close</button>
                <button onClick={saveEvent}>save</button>
                <div class="form-group">
                    <label for="">Event Title</label>
                    <input type="text"
                        class="form-control" name="" id="" aria-describedby="helpId" placeholder=""></input>
                    <label for="">Date</label>
                    <input type="date"
                        class="form-control" name="" id="" aria-describedby="helpId" placeholder=""></input>
                </div>
            </Modal>
        </div>
    );
}


