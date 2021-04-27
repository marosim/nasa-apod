import React from "react";

function NasaApi(props) {

  if (props.media === "image") {

    return (
      <div className="content">
        <h2>{props.title}</h2>
        <div className="infos">
          <div>
            <img src={props.url} alt="pic" />
          </div>
          <div className="text">
            <h3>{props.date}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    );
  } else {
    
    return (
      <div className="content">
        <h2>{props.title}</h2>
        <div className="infos">
          <div>
            <iframe src={props.url} title={props.title} height={310}></iframe>
          </div>
          <div className="text">
            <h3>{props.date}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NasaApi;
