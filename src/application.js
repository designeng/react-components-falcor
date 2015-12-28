import React from 'react';
import Navigation   from './components/navigation';
import NewsList     from './components/news';
import Login        from './components/forms/login';

export default class Application extends React.Component {
    render() {
        return (
            <div id="app-wrapper">
                <Login />
                <Navigation />
                <NewsList type="top" />
            </div>
        )
    }
}