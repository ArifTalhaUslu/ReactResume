import React from "react";

export default function Navbar({data}) {
  return (
    <div>
      <nav
        style={{ backgroundColor: "black" }}
        className="navbar navbar-expand-lg navbar-dark bg-black"
      >
        <a className="navbar-brand" href="#main">
          Arif Uslu
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {data &&
              data.map((item) => (
                <li className="nav-item active">
                  <a className="nav-link" href={"#"+item.contentHeader}>
                    {item.contentHeader}
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
