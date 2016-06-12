
import React from 'react';
import _ from 'lodash';
import Infinite from 'react-infinite';

export default class FashionMix extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            data: [],
            page: 1,
            isInfiniteLoading: false,
        };
    }
    getData() {
        this.setState({
            isInfiniteLoading: false
        })
        const {loadMore, route} = this.props;
        loadMore(route);
        //获取数据,并设置page
        this.setState({
            data: _.union(this.state.data, this.props.news)
        })
    }
    renderItems() {
        var items = _.union(this.state.data, _.get(this.props, 'news'));
        if ( _.isEmpty(items) ) {
            return;
        }
        return items
            .map(function (item, index) {
                return (
                    <li key={item._id}>
                        <div className="img-wrap">
                            <a href={item.detailURL}>
                                <img src={item.imgURL} />
                            </a>
                        </div>
                        <div className="content">
                            <span className="title">
                                <a href={item.detailURL}>{item.title}</a>
                            </span>
                            <span className="detail">{item.detail}</span>
                            <div className="clear"></div>
                        </div>
                        <div className="oper">
                            <span className="time">{item.createdAt.format(Constants.Time.yMd)}</span>
                            <span><a href={item.detailURL}>[查看详情]</a></span>
                        </div>
                        <div className="clear"></div>
                    </li>
                )
            })
    }
    elementInfiniteLoad() {
        return <div>
            Loading...
        </div>;
    }
    render() {
        return <div id="fashion-mix">
            <Infinite className="artc"
                      useWindowAsScrollContainer
                      elementHeight={161}
                      preloadBatchSize={1610}
                      onInfiniteLoad={this.getData.bind(this)}
                      preloadAdditionalHeight={Infinite.containerHeightScaleFactor(3)}
                      infiniteLoadBeginEdgeOffset={50}
                      loadingSpinnerDelegate={this.elementInfiniteLoad()}
                      isInfiniteLoading={this.props.loadState}>
                {this.renderItems()}
            </Infinite>
            <a href="#header"><span className="back-to-top" id="backToTop"></span></a>
        </div>;
    }
}