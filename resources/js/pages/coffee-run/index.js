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

    const { coffeeRuns, onAddCoffeeRun, onLoadCoffeeRuns } = props;

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
                <Col md={4} lg={2}>
                    <div className={"pt-3"}>
                        <AddCoffeeRun/>
                    </div>
                </Col>
                <Col xs={12} md={8} lg={10}>
                    <Row>
                        <Col xs={12}>
                            <div className={"coffee-run-list-container pt-3"}>
                                {displayCoffeeRuns()}
                            </div>
                        </Col>
                    </Row>
                </Col>
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