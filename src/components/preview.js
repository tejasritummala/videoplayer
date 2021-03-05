import React, { Component } from 'react';
import ReactPlayer from "react-player";
class preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ""
        }
    }

    componentDidMount() {
        console.log(this.props)
        if (this.state.selected === "")
            this.setState({
                selected: this.props.data.selVideo
            })

    }

    render() {
        return (
            <div>
                {(this.props.currentObj.vId === this.props.data.selVideo) ?
                    <div>
                        <ReactPlayer className="videoClass" url={this.props.currentObj.link} controls={true} playing={true} />

                    </div> : <div />
                }
            </div>
        );
    }
}

preview.propTypes = {

};

export default preview;