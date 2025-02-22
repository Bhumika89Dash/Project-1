import React from "react";

const Help = () => {
  return (
    <div id="Help">

    <div id="innerhelp" className="container mt-4">
      <div className="jumbotron p-5 bg-light border rounded">
        <h1 className="display-5">Need Help?</h1>
        <p className="lead">We're here to assist you! Whether you need guidance on starting a campaign or support for your contributions, feel free to reach out.</p>
        <hr className="my-4" />
        <p>Explore our FAQ section or contact our support team for further assistance.</p>
        <a className="btn btn-primary btn-lg" href="/contact" role="button">Get Support</a>
      </div>
    </div>
    </div>
  );
};



export default Help;
