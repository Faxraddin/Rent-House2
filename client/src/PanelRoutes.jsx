import React, { Component } from "react";
import { Route,Routes} from "react-router-dom";


axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

class PanelRoutes extends Component {
  render() {
    return (
      <div className="contents">
        <Toaster position="bottom-right" toastOptions={{duration:2000}} />
        <Routes>
            
        </Routes>
      </div>
    );
  }
}

export default PanelRoutes;