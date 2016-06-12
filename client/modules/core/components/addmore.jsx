import React from 'react';

class AddMore extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
        };
    }
    render() {
        let that = this;
        return (
            <div id="add-more">
                <button onClick={this.addMore.bind(this)}>点击加载更多</button>
            </div>
        )
    }
    addMore() {
        const {addMore, route} = this.props;
        addMore(route);
    }
}

export default AddMore;
