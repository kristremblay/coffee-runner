import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addCoffeeRun } from '../redux/actions/coffeeRunActions';
import axios from 'axios';
import DateTime from 'react-datetime';

import { Button, Form, Modal } from 'react-bootstrap';

const AddCoffeeRun = (props) => {

    let initialState = {
        title: null,
        ends_at: null,
        slots: null
    };

    const [ coffeeRun, setValues ] = useState(initialState);
    const [ validated, setValidated ] = useState(false);
    const [ show, setShow] = useState(false);

    const toggleModal = () => {
        setValues(initialState);
        setShow(!show);
    };

    const { onAddCoffeeRun } = props;

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;

        if(form.checkValidity() === false){
            e.stopPropagation();
        }

        axios.post('/coffee-runs/store', {
            data: coffeeRun
        }).then(res => {
            onAddCoffeeRun({
                ...res.data
            });

            toggleModal();

        }).catch(err => {
            throw new Error(err);
        });
    };

    const handleUpdateField = e => {
        setValues({
            ...coffeeRun,
            [e.target.name]: e.target.value
        })
    };

    const handleChangeDate = date => {
        setValues({
            ...coffeeRun,
            ends_at: date.format("l hh:mmA")
        });
    };

    return (
        <div>
            <Button variant={"success"} onClick={toggleModal}>Add Coffee Run</Button>
            <Modal show={show} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Coffee Run</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit} validated={validated}>
                    <Modal.Body>
                        <Form.Group controlId={"formGroupTitle"}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                name={"title"}
                                required
                                type={"text"}
                                onChange={handleUpdateField}
                            />
                        </Form.Group>
                        <Form.Group controlId={"formGroupEndsAt"}>
                            <Form.Label>What time are you leaving?</Form.Label>
                            <DateTime
                                onChange={handleChangeDate}
                                inputProps={{'required': 'required'}}
                            />
                        </Form.Group>
                        <Form.Group controlId={"formGroupSlots"}>
                            <Form.Label>How many order slots?</Form.Label>
                            <Form.Control
                                name={"slots"}
                                required
                                type={"number"}
                                onChange={handleUpdateField}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type={"submit"} variant={"success"}>Add Coffee Run</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        coffeeRuns: state.coffeeRuns
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddCoffeeRun: content => dispatch(addCoffeeRun(content))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCoffeeRun);