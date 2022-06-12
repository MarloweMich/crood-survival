import React from "react";
//import { Link } from 'react-router-dom';
import "./losePage.css";

function LosePage() {

  return (
    <div className="container">
      <h1>Condolances!</h1>
      <button className="btn btn-lg btn-light m-2" onClick="changeLocation">
        Play Again?
      </button>
      <script>
        function changeLocation() {
          window.location.assign('/')
        }
      </script>
    </div>
  );
}

export default LosePage;
