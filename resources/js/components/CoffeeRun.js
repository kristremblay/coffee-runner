import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios';

import { cancelCoffeeRun } from "../redux/actions/coffeeRunActions";

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
        <Card className={'coffee-run-list-item mb-3'}>
            <Card.Body>
                <Card.Title onClick={toggleCollapsedActions}>{data.title}</Card.Title>
                <Card.Text>
                    {/** @TODO: Setup grid here and add coffee run details + countdown timer if near deadline. **/}
                    @{ moment(data.ends_at).format("h:mm:ss") }
                </Card.Text>
                <Collapse in={showControls}>
                    <div>
                        { displayControls() }
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
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