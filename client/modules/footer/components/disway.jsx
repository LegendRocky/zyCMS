import React from 'react';

//import AddMore from '/client/modules/core/containers/addmore';
import Footer from '../containers/footer';

class DisWay extends React.Component{
    render() {
        return(
            <div id="dis-way">
                <div className="main">
                    <img src="http://img.duolayimeng.com/pc/disway.jpg" />
                </div>
                <Footer />
            </div>
        )
    }
}

export default DisWay;