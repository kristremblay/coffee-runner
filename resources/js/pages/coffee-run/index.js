import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

import CoffeeRun from '../../components/CoffeeRun';
import AddCoffeeRun from '../../components/AddCoffeeRun';

const CoffeeRunnerIndex = (props) => {

    const { coffeeRuns } = props;

    const displayCoffeeRuns = () => coffeeRuns.map(cr => <CoffeeRun data={cr} key={cr.id}/>);

    return (
        <Container>
            <Row>
                <Col className={"mb-3"}>
                    <AddCoffeeRun/>
                </Col>
            </Row>
            <Row>
                {displayCoffeeRuns()}
            </Row>
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        coffeeRuns: state.coffeeRuns
    };
};
export default connect(mapStateToProps, null)(CoffeeRunnerIndex);