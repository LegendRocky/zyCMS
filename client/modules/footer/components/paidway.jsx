import React from 'react';

//import AddMore from '/client/modules/core/containers/addmore';
import Footer from '../containers/footer';

class PaidWay extends React.Component{
    render() {
        return(
            <div id="paid-way">
                <div className="main">
                    <img src="http://img.duolayimeng.com/pc/paidway.jpg" />
                </div>
                <Footer />
            </div>
        )
    }
}

export default PaidWay;