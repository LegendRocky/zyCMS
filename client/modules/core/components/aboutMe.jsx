
import React from 'react';

class AboutMe extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
        };
    }
    render() {
        let that = this;
        return (
            <div id="about-me">
                <h1>关于站长～～～</h1>
                <img className="bg-sc" src="/images/uestc.jpeg" />
                <p>2014年毕业于电子科技大学通信与信息工程学院</p>
                <p>全栈开发工程师</p>
            </div>
        )
    }
}

export default AboutMe;
