import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

import { Container, Row, Col, Card, Button, Jumbotron, Alert } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const DetailsPage = (props) => {

    let initialState = {
        id: null,
        title: null,
        slots: null,
        ends_at: null,
        orders: [],
        orderCount: 0
    };

    const id = props.match.params.id;
    const [ coffeeRun, setCoffeeRun ] = useState(initialState);

    const handleLoadCoffeeRun = () => {
        axios.get(`/coffee-runs/${id}/show`).then(res => {

            const { coffeeRun, orders, orderCount, owner } = res.data;

            setCoffeeRun({
                ...coffeeRun,
                orders: orders,
                owner: owner,
                orderCount: orderCount
            });
        }).catch(err => {
            throw new Error(err);
        });
    };

    useEffect(() => {
        handleLoadCoffeeRun();
    }, []);

    // This is a good candidate for a separate component, even if just to clean up this file.
    const displayOrders = () => {

        let markup;

        const { owner, orders, orderCount, slots } = coffeeRun;

        if(owner){
            markup = orders.map(o => (
                <Col sm={12} md={6} lg={4} className={"pa-3 mb-3"} key={o.id}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{o.details.title}</Card.Title>
                        </Card.Body>
                        <Card.Body>
                            <Button variant={"primary"}>Control</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ));
        }
        else{
            if(orderCount > 0){
                if(orderCount < slots){
                    markup = (
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    <Alert variant={"warning"}>
                                        There is room for <strong>{coffeeRun.slots - coffeeRun.orders}</strong> more orders.
                                    </Alert>
                                </Col>
                                <Col xs={12}>
                                    <Button variant={"primary"}>Place an Order</Button>
                                </Col>
                            </Row>
                        </Container>
                    );
                }
                else{
                    markup = (
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    <Alert variant={"danger"}>This coffee run is full :(</Alert>
                                </Col>
                                <Col xs={12}>
                                </Col>
                            </Row>
                        </Container>
                    );
                }
            }
            else{
                markup = (
                    <Col>
                        <Jumbotron>
                            <h2>There are no orders!</h2>
                            <p>
                                Would you like to get in on the action before all <strong>{slots}</strong> slots fill up?
                            </p>
                            <p>
                                <Button variant={"primary"}>Place an Order</Button>
                            </p>
                        </Jumbotron>
                    </Col>
                );
            }
        }
        return markup;
    };

    const displayAcceptingOrdersUntil = () => {
        return (
            <p>Accepting Orders Until: { moment(coffeeRun.ends_at).format("HH:mm") }</p>
        );
    };

    return (
        <Container>
            <Row>
                <Col className={"mb-3"}>
                    <Link to={"/"} className={"btn btn-primary"}>&#9664; Back</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>{coffeeRun.title}</h2>
                    { displayAcceptingOrdersUntil() }
                </Col>
            </Row>
            <Row>
                { displayOrders() }
            </Row>
        </Container>
    );
};

export default DetailsPage