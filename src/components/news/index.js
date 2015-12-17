import React from 'react';
import model from './model';

export default class NewsList extends React.Component {

    static propTypes = {
        itemsType: React.PropTypes.string
    }

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
        const newsListClass     = "top-news-list top-news-list_flipping";
        const aClass            = "top-news-item ncard ncard-big ncard-shr";
        const imgWrapperClass   = "image-wrapper image-wrapper_big";
        const imgClass          = "top-news-item__image";
        const captionClass      = "top-news-item__caption";

        const noopLink          = "#/drive-test/";

        let items = Object.keys(this.state.items).map(idx => {
            return  <a href={noopLink} className={aClass}>
                        <div class={imgWrapperClass}>
                            <img class={imgClass} src={this.state.items[idx].img} width="460" height="260" alt="" ></img>
                        </div>
                        <strong class={captionClass}>{this.state.items[idx].caption}</strong>
                    </a>
        });
        
        return <div class={newsListClass}>{items}</div>
    }
}