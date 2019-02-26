import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios';

import { cancelCoffeeRun } from "../redux/actions/coffeeRunActions";


import { Card, Button, Collapse, ListGroup, ListGroupItem, Col } from 'react-bootstrap';

const CoffeeRun = (props) => {
    const { data, account, onCancelCoffeeRun } = props;
    const [ showControls, setShowControls ] = useState(false);

    const toggleCollapsedActions = () => setShowControls(!showControls);

    const handleCancelCoffeeRun = () => {
        const { id } = data;

        if(confirm("Are you sure you want to cancel this coffee run?")){
            axios.post('/coffee-runs/destroy', {
                data: {
                    id
                }
            }).then(res => {
                onCancelCoffeeRun(id);
            }).catch(err => {
                throw new Error(err);
            });
        }
    };

    // Creating a new order will have to be a separate component.
    const handleOpenOrderModal = () => {};

    /**
     * Users must be able to place orders on coffee runs of others,
     * but not their own.
     *
     * Users can only cancel their own runs.
     */
    const displayControls = () => {
        return data.user_id == account.id ?
            (<Button variant={"danger"} onClick={handleCancelCoffeeRun}>Cancel Run</Button>) :
            (<Button variant={"primary"} onClick={handleOpenOrderModal}>Place an Order</Button>);
    };

    return (
        <Col sm={12} md={6} lg={4} className={"pa-3 mb-3"}>
            <Card>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        ....
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Leaving @ { moment(data.ends_at).format("h:mm:ss") }</ListGroupItem>
                    <ListGroupItem>Orders: 0 / { data.slots }</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    { displayControls() }
                </Card.Body>
            </Card>
        </Col>
    );
};

const mapStateToProps = state => {
    return {
        account: state.account
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCancelCoffeeRun: id => dispatch(cancelCoffeeRun(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeRun);