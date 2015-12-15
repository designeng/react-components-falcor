import React from 'react';

export default class NavigationSection extends React.Component {

    componentWillMount() {
        this.setState({items: [
            {name: "Acura", href: "/acura/"}, 
            {name: "Nissan", href: "/nissan/"}, 
            {name: "Ford" , href: "/ford/"}
        ]});
    }

    render() {
        var items = Object.keys(this.state.items).map(idx => {
            return <li key={idx} className="nav-mobile-item">
                <a className="nav-mobile-item__link" href={this.state.items[idx].href} >
                    {this.state.items[idx].name}
                </a></li>
        });
        return <ul>{items}</ul>
    }
}