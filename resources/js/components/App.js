import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { loadAccountInfo } from '../redux/actions/accountActions';
import CoffeeRunsIndex from '../pages/coffee-run';

import { Nav, Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import {loadCoffeeRuns} from "../redux/actions/coffeeRunActions";


const App = (props) => {

    const { onLoadAccountInfo, onLoadCoffeeRuns } = props;

    const handleLoadAccountInfo = () => {
        axios.get('/user/info').then(res => {
            onLoadAccountInfo({
                data: res.data
            });
        }).catch(err => {
            throw new Error(err);
        })
    };

    const handleLoadCoffeeRuns = () => {
        axios.get(`/coffee-runs`).then(res => {
            onLoadCoffeeRuns({
                data: res.data
            });
        }).catch(err => {
            throw new Error(err)
        });
    };

    const handleLogout = () => {
        axios.post("/logout").then(res => {
            window.location = "/";
        }).catch(err => {
            throw new Error(err);
        });
    };

    useEffect(() => handleLoadCoffeeRuns(), []);


    useEffect(() => {
        handleLoadAccountInfo()
    }, []);

    return (
        <div>
            <Navbar collapseOnSelect bg={"primary"} variant={"dark"} fixed={"top"} expand={"md"}>
                <Container>
                    <Navbar.Brand href={"#"}>Coffee Runner</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id={"responsive-navbar-nav"}>
                        <Nav className={"ml-auto"}>
                            <Nav.Link href={"#user"}>My Account</Nav.Link>
                            <Nav.Link href={"#logout"} onClick={handleLogout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Router>
                        <div>
                            <Route exact path={"/"} component={CoffeeRunsIndex}/>
                            <Route path={"/user"} component={(props)=>(<Container><Row><Col><h2>User Section Here</h2></Col></Row></Container>)}/>
                        </div>
                    </Router>
                </Row>
                <Row>
                    <footer>
                        Made with <span className={"heart"}>❤</span> by <a href={"https://kristremblay.com"}>Kris Tremblay</a>
                    </footer>
                </Row>
            </Container>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        account: state.account
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadAccountInfo: content => dispatch(loadAccountInfo(content)),
        onLoadCoffeeRuns: content => dispatch(loadCoffeeRuns(content))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);