import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap';

const DetailsPage = (props) => {

    let initialState = {
        id: null,
        title: null,
        slots: null,
        ends_at: null
    };

    const id = props.match.params.id;
    const [ coffeeRun, setCoffeeRun ] = useState(initialState);

    const handleLoadCoffeeRun = () => {
        axios.get(`/coffee-runs/${id}/show`).then(res => {
            setCoffeeRun({
                ...res.data
            });

            console.log(res.data)
        }).catch(err => {
            throw new Error(err);
        });
    }

    useEffect(() => {
        handleLoadCoffeeRun();
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <h2>{coffeeRun.title}</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailsPage