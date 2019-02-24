import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { loadAccountInfo } from '../redux/actions/accountActions';
import CoffeeRunsIndex from '../pages/coffee-run';

const App = (props) => {

    const { onLoadAccountInfo,  } = props;

    const handleLoadAccountInfo = () => {
        axios.get('/user/info').then(res => {
            onLoadAccountInfo({
                data: res.data
            });
        }).catch(err => {
            throw new Error(err);
        })
    };

    useEffect(() => {
        handleLoadAccountInfo()
    }, []);

    return (
        <Router>
            <Route exact path={"/home"} component={CoffeeRunsIndex}/>
        </Router>
    );
};

const mapStateToProps = state => {
    return {
        account: state.account
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadAccountInfo: content => dispatch(loadAccountInfo(content))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);