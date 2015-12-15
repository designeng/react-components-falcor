import React from 'react';
import model from './model';

export default class NavigationSection extends React.Component {

    constructor() {
        super()
        this.state = {items: []}
    }

    update() {
        model.getValue(['items'])
            .then(response => {
                console.log("response.json.items::::", response.json.items);
                return response;
            })
            // .then(response => this.setState({items: response.json.items}))
    }

    componentWillMount() {
        this.update();
    }

    render() {
        var items = Object.keys(this.state.items).map(idx => {
            return <li key={idx} className="nav-mobile-item">
                <a className="nav-mobile-item__link" href={"#" + this.state.items[idx].href} >
                    {this.state.items[idx].name}
                </a></li>
        });
        return <ul>{items}</ul>
    }
}