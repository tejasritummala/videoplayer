import React, { Component } from 'react';
import ReactPlayer from "react-player";
import Preview from "./preview";
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
        debugger;
        this.setState({

            selVideo: evt.currentTarget.id
        })
    };
    
    componentDidUpdate() {
        debugger;
        if (this.state.selVideo !== "" && !this.state.showVideos)
            this.setState({
                showVideos: true
            })
        // this.props.history.push("/preview")
    }
    render() {
        return (
            <div>
                {(this.state.jsonData.length >= 1) ?
                    this.state.jsonData.map((data, index) => (
                        <div key={data.vId} id={data.vId} className="items" onClick={this.onClick} >
                            {(!this.state.showVideos) ?
                                <div>
                                    <ReactPlayer light={true} url={data.link} controls={true} playing={false} />
                                    <p>{data.description}</p>
                                </div>
                                :
                                <Preview data={this.state} currentObj={data}></Preview>
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