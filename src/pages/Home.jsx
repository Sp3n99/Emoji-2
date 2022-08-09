import React, { useEffect, useState } from "react";
import "./home.scss"
import Topbar from "../components/Topbar"
import mergeImages from 'merge-images-v2'
import base from "../images/base.png"
import eyes from "../images/eyes.png"
import mouth from "../images/mouth.png"

export default function Home() {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    mergeImages([base])
      .then((src) => setSrc(src))
      .catch((err) => console.log(err));
  }, []);

  function handleClick(selection) {
    mergeImages([base, selection])
      .then((src) => setSrc(src))
      .catch((err) => console.log(err));
  };
  return (
    <div className="home">
        <Topbar />
        <div className = "wrapper">
            <div className="image-container">
                <img src={src} alt="emoji preview" />
                <form>
                    <input type="text" placeholder="Name"/>
                </form>
            </div>
            <div className="options-container">
                <div className="options-wrapper">
                    <div className="option" onClick={() => { handleClick(eyes) }}>
                        <h4>Eyes:</h4>
                        <div className="image-selector">
                            <img src={eyes} alt="emoji eyes selector" />
                        </div>
                    </div>
                    <div className="option" onClick={() => { handleClick(mouth) }}>
                        <h4>Mouth:</h4>
                        <div className="image-selector">
                            <img src={mouth} alt="emoji eyes selector" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
