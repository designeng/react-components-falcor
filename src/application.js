import React from 'react';
import Navigation   from './components/navigation';
import NewsList     from './components/news';

export default class Application extends React.Component {
    render() {
        return (
            <div id="app-wrapper">
                <Navigation />
                <NewsList type="top" />
            </div>
        )
    }
}