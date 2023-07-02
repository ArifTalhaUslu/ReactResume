import React from "react";

export default function SctnLst(props) {
  return (
    <div id={props.contentHeader}>
      <div>
        <h1 className="sctnhdr">{props.headerText}</h1>
      </div>
      <div>
        <p className="sctnText">{props.contentText}</p>
      </div>
      <div>
        {props.list &&
          props.list.map((item) => {
            return (
              <>
                <div className="row m-2 p-2">
                  <div className="col-lg-8  col-sm-12">
                    <h2>{item.header}</h2>
                    <h6 style={{color:"gray", fontFamily:"Times New Roman"}}>{item.dateText}</h6>
                    <p>{item.text}</p>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <img
                      className="sctnImage w-100"
                      style={{borderRadius:"10px"}}
                      alt="sctnImage"
                      src={item.img}
                    />
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}
