import React from 'react'
import ReactDOM from 'react-dom';

const App = (props) => (
    <div>
        <h1>Something Cool Starts Here</h1>
    </div>
);

if(document.getElementById('app')){
    ReactDOM.render(<App/>, document.getElementById('app'));
}