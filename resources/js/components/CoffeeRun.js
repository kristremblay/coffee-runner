import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import { connect } from 'react-redux';
import moment from 'moment';

const CoffeeRun = (props) => {
    const { data, account } = props;
    const [ showControls, setShowControls ] = useState(false);

    const toggleCollapsedActions = () => setShowControls(!showControls);

    const handleCancelCoffeeRun = () => {};

    // Creating a new order will have to be a separate component.
    const handleOpenOrderModal = () => {};

    /**
     * Users must be able to place orders on coffee runs of others,
     * but not their own.
     *
     * Users can only cancel their own runs.
     */
    const displayControls = () => {
        return data.user.id === account.id ?
            (<Button variant={"danger"} onClick={handleCancelCoffeeRun}>Cancel Run</Button>) :
            (<Button variant={"primary"} onClick={handleOpenOrderModal}>Place an Order</Button>);
    };

    return (
        <Card className={'coffee-run-list-item mb-3'}>
            <Card.Body onClick={toggleCollapsedActions}>
                <Card.Title>{data.title}</Card.Title>
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

export default connect(mapStateToProps, null)(CoffeeRun);