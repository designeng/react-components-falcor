import React from 'react';
import model from './model';

export default class NewsList extends React.Component {

    static propTypes = {
        type: React.PropTypes.string
    }

    constructor() {
        super()
        this.state = {items: []}
    }

    componentWillMount() {
        var {type} = this.props;
        
        model.getValue([type])
            .then(response => this.setState({items: response}))
    }

    render() {
        const newsListClass     = "top-news-list top-news-list_flipping";
        const aClass            = "top-news-item wrap";
        const imgWrapperClass   = "image-wrapper image-wrapper_big cell";
        const imgClass          = "top-news-item__image";
        const captionClass      = "top-news-item__caption cell";
        const spanClass         = "caption-wrapper";

        const noopLink          = "#/drive-test/";

        let items = Object.keys(this.state.items).map(idx => {
            return  <a key={idx} href={noopLink} className={aClass}>
                        <div className={imgWrapperClass}>
                            <img className={imgClass} src={this.state.items[idx].img} width="460" height="260" alt="" ></img>
                        </div>
                        <div className={captionClass}><span className={spanClass}>{this.state.items[idx].caption}</span></div>
                    </a>
        });

        return <div className={newsListClass}>{items}</div>
    }
}