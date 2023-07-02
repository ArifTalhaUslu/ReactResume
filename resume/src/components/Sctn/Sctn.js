import React from "react";

export default function Sctn(props) {
  return (
    <div id={props.contentHeader}>
      <div>
        <h1 className="sctnhdr">{props.headerText}</h1>
      </div>
      <div>
        <p className="sctnText">{props.contentText}</p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-12"></div>
        <div className="col-lg-4 col-sm-12">
          <img className="sctnImage w-100" alt="sctnImage" src={props.imgSrc} style={{borderRadius:"10px"}}/>
        </div>
        <div className="col-lg-4 col-sm-12"></div>
      </div>
    </div>
  );
}
