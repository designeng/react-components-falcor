import React from 'react';
import model from './model';

export default class NavigationSection extends React.Component {

    // static propTypes = {itemsType: React.PropTypes.string}

    constructor() {
        super()
        this.state = {items: []}
    }

    componentWillMount() {
        var {itemsType} = this.props;
        
        model.getValue([itemsType])
            .then(response => this.setState({items: response}))
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