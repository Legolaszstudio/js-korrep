import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="loadingmodal">
        <div className="loadingmodalcontent">
            <div style={{transform: "scale(2)"}}>
                <div className="spinner-border text-success" role="status"></div>
            </div>
        </div>
    </div>
  );
}