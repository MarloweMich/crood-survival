import React from "react";
import "./winPage.css";

function WinPage() {

  return (
    <div className="container">
      <h1>Congratulations!</h1>
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

export default WinPage;
