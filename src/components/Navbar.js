import React from "react";

class Nabvar extends React.Component {
  render() {
    const { nameGuest } = this.props;
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarExample01"
                aria-controls="navbarExample01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarExample01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <h3 className="text-white">First App</h3>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="p-5 text-center bg-dark">
            <h1 className="mb-3 text-white">Hola, {nameGuest}</h1>
          </div>
        </header>
      </div>
    );
  }
}

export default Nabvar;
