import React, { Component } from 'react';
import ReactPlayer from "react-player";
import preview from "./preview"
class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonData: [],
            showVideos: false,
            selVideo: ""
        }
    }

    componentDidMount() {
        var self = this;
        fetch('videos.json'
        ).then(function (response) {
            return response.json();
        }).then(function (myJson) {
            console.log(myJson)
            self.setState({ jsonData: myJson });
        });
    }

    onClick = (evt) => {
        this.setState({
            showVideos: true,
            selVideo: evt.currentTarget.id
        })
        console.log(this.state)
    };
    shouldComponentUpdate(nextProps, nextState) {
        debugger;
        return true;
    }
    render() {
        return (
            <div>
                {(this.state.jsonData.length >= 1) ?
                    this.state.jsonData.map((data, index) => (
                        <div key={data.vId} id={data.vId} className="items" onClick={this.onClick}>
                            {(!this.state.jsonData.showVideos) ?
                                <div>
                                    <ReactPlayer light={true} url={data.link} controls={true} playing={false} />
                                    <p>{data.description}</p>
                                </div>
                                :
                                <preview></preview>
                            }

                        </div>

                    ))
                    : <h1>No Data</h1>
                }
            </div>
        );
    }
}

home.propTypes = {

};

export default home;