import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addCoffeeRun } from '../redux/actions/coffeeRunActions';
import axios from 'axios';

import { Button, Form } from 'react-bootstrap';

const AddCoffeeRun = (props) => {

    let initialState = {
        title: null,
        ends_at: null
    };

    const [ coffeeRun, setValues ] = useState(initialState);
    const [ validated, setValidated ] = useState(false);

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
            console.log(res);
            /*onAddCoffeeRun({
                    ...form,
                id: 31 + Math.random() * 1000 // @TODO: remove this when ajax implemented
            });*/
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

    return (
        <div id={"create-coffee-run"}>
            <Form onSubmit={handleSubmit} validated={validated}>
                <Form.Control
                    name={"title"}
                    required
                    type={"text"}
                    onChange={handleUpdateField}
                />
                <Form.Control
                    name={"ends_at"}
                    required
                    type={"text"}
                    onChange={handleUpdateField}
                />
                <Form.Control
                    name={"slots"}
                    required
                    type={"text"}
                    onChange={handleUpdateField}
                />
                <Button type={"submit"} variant={"success"}>Add Coffee Run</Button>
            </Form>
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