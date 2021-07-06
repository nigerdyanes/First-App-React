import React from "react";
import Nabvar from "../components/Navbar";
import Card from "../components/Card";
import Form from "../components/Form";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nabvar nameGuest="Michel" />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
                <Card />
            </div>
            <div className="col-md-6">
                <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
