import React from "react";
import "../footerComponent/footer.css";

class FooterComponent extends React.Component {
  render() {
    return (
      <div id="divfooter">
        <footer className="footer position-sticky">
          <p>Municipalidad Carmen de Areco</p>
          <p>Copyright 2007-2020 by DigitalWebs. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
