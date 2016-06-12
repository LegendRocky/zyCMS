import React from 'react';

class ImageUpload extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
        };
    }
    upload() {
        let image = $("#image").val();
        console.log(typeof image);
        let upload = this.props.upload
        upload(image);
    }
    render() {
        let that = this;
        return (
            <div id="add-more">
                <input type="file" id="image" />
                <button onClick={this.upload.bind(this)}>上传图片</button>
            </div>
        )
    }
    addMore() {
        const {addMore, route} = this.props;
        addMore(route);
    }
}

export default ImageUpload;
