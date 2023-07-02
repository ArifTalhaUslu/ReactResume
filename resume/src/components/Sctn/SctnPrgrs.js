import React from "react";

export default function SctnPrgrs(props) {
  return (
    <div id={props.contentHeader}>
      <div>
        <h1 className="sctnhdr">{props.headerText}</h1>
      </div>
      <div>
        <p className="sctnText">{props.contentText}</p>
      </div>
      <div>
        {props.prgrsList &&
          props.prgrsList.map((item) => {
            return (
              <>
                <div className="row" style={{alignItems:"center", textAlign:"center", padding:"10px", paddingRight:"7%"}}>
                  <div className="col-2">
                    <h4>{item.prgrsName}</h4>
                  </div>
                  <div className="col-10">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: item.prgrsVal + "%" }}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}
