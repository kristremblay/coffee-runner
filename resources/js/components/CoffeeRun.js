import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios';

import { cancelCoffeeRun } from "../redux/actions/coffeeRunActions";

import { Card, Button, Collapse, ListGroup, ListGroupItem, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CoffeeRun = (props) => {
    const { data, account, onCancelCoffeeRun } = props;

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

    /**
     * Users must be able to place orders on coffee runs of others,
     * but not their own.
     *
     * Users can only cancel their own runs.
     */
    const displayControls = () => {
        return data.user_id == account.id ?
            (<Button variant={"danger"} onClick={handleCancelCoffeeRun}>Cancel Run</Button>) :
            (<Link className={"btn btn-primary"} to={`/details/${data.id}`}>Place an Order</Link>);
    };

    return (
        <Col sm={12} md={6} lg={4} className={"pa-3 mb-3"}>
            <Card>
                <Card.Body>
                    <Card.Title>
                        <Link to={`/details/${data.id}`}>{data.title}</Link>
                    </Card.Title>
                    <Card.Text>
                        ....
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Leaving @ { moment(data.ends_at).format("h:mm:ss") }</ListGroupItem>
                    <ListGroupItem>Orders: 0 / { data.slots }</ListGroupItem>
                    <ListGroupItem>Runner: { data.user.name }</ListGroupItem>
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