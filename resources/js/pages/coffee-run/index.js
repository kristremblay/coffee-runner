import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { loadCoffeeRuns } from "../../redux/actions/coffeeRunActions";

import {
    Container,
    Row,
    Col,
    Button,
    Icon,
    Card
} from 'react-bootstrap';

import CoffeeRun from '../../components/CoffeeRun';
import AddCoffeeRun from '../../components/AddCoffeeRun';

const CoffeeRunnerIndex = (props) => {

    const { coffeeRuns, onLoadCoffeeRuns } = props;

    const displayCoffeeRuns = () => coffeeRuns.map(cr => <CoffeeRun data={cr} key={cr.id}/>);

    const handleLoadCoffeeRuns = () => {
        axios.get(`/coffee-runs`).then(res => {
            onLoadCoffeeRuns({
                data: res.data
            });
        }).catch(err => {
            throw new Error(err)
        });
    };

    useEffect(() => handleLoadCoffeeRuns(), []);

    return (
        <Container>
            <Row>
                <Col xs={12} className={"mb-3"}>
                    { /** @TODO: This is temporary until navbar is implemented **/}
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

const mapDispatchToProps = dispatch => {
    return {
        onLoadCoffeeRuns: content => dispatch(loadCoffeeRuns(content))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeRunnerIndex);