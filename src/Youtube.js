import React, { Component } from 'react';


// const API = 'API Removed for security perpose'
const API = ' API Removed for security perpose'
const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A'
const result = 20;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`


class Youtube extends Component {

	constructor(props){
		super(props);

		this.state={
			resultyt: []
		};
		this.clicked=this.clicked.bind(this);
	}


clicked(){
	fetch(finalURL)
    .then((response) => response.json())
    .then((responsejson) => {
    	// console.log(responsejson);
    	const resultyt = responsejson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
    	this.setState({resultyt});
    })
    .catch((error) => {
      console.error(error);
    });

}


  render(){
  	console.log(finalURL);
    return(
    	<div>
      <button onClick={this.clicked}>Get YouTube Videos</button>
      {
      	this.state.resultyt.map((link,i)=>{
      		console.log(link);
        var frame = <div key={i} className="Youtube"><iframe width="560" height="315" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowFullScreen></iframe></div>
      	return frame;
      	})

      }
      {this.frame}

      

      
      </div>
    );
  }
}

export default Youtube;
