import React from 'react';
import NavigationSection from './section';

export default class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <NavigationSection itemsType="items"/>
                <NavigationSection itemsType="brands"/>
            </nav>
        )
    }
}