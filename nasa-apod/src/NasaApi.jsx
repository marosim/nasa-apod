import React from "react";

function NasaApi(props) {

  return (
		<div className="content">
		<h2>{props.title}</h2>
    <div className="infos">
			<div>
      <img src={props.image} alt="pic" />
			</div>
      <div className="text">
        <h3>{props.date}</h3>
        <p>{props.description}</p>
      </div>
    </div>
		</div>
  );
};

export default NasaApi;
