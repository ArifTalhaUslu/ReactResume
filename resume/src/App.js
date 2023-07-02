import React, { useState } from "react";
import "./css/global.css";
import Navbar from "./components/shared/Navbar";
import Sctn from "./components/Sctn/Sctn";
import SctnLst from "./components/Sctn/SctnLst";
import SctnPrgrs from "./components/Sctn/SctnPrgrs";
import Footr from "./components/shared/Footr";

//import axios from "axios";
import data from "./DataResume.json";

export default function App() {
  // const [data, setDta] = useState(null);

  // axios
  //   .get("https://ariftalhauslu.github.io/DataResume.json")
  //   .then((res) => setDta(res.data))
  //   .catch((err) => console.log(err));

  return (
    <div>
      <Navbar data={data} />
      <div className="container">
        {data &&
          data.map((item) => {
            if (item.sectionType === "Sctn") {
              return (
                <>
                  <Sctn
                    headerText={item.contentHeader}
                    contentText={item.contentText}
                    imgSrc={item.imgSrc}
                    list={item.list}
                    prgrsList={item.prgrsList}
                  />
                  <hr className="sctnDivider"></hr>
                </>
              );
            } else if (item.sectionType === "SctnLst") {
              return (
                <>
                  <SctnLst
                    headerText={item.contentHeader}
                    contentText={item.contentText}
                    imgSrc={item.imgSrc}
                    list={item.list}
                    prgrsList={item.prgrsList}
                  />
                  <hr className="sctnDivider"></hr>
                </>
              );
            } else if (item.sectionType === "SctnPrgrs") {
              return (
                <>
                  <SctnPrgrs
                    headerText={item.contentHeader}
                    contentText={item.contentText}
                    imgSrc={item.imgSrc}
                    list={item.list}
                    prgrsList={item.prgrsList}
                  />
                  <hr className="sctnDivider"></hr>
                </>
              );
            } else {
              return <h1>This section is empty</h1>;
            }
          })}
      </div>
      <Footr />
    </div>
  );
}
