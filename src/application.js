import React from 'react';
import ReactDom from 'react-dom';
import Navigation from './components/navigation.js';

class Application extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
            </div>
        )
    }
}

ReactDom.render(<Application/>, document.querySelector('#application'))