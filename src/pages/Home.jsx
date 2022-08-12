import React, { useEffect, useState } from "react";
import "./home.scss"
import Topbar from "../components/Topbar"
import mergeImages from 'merge-images-v2'

export default function Home() {
  const [src, setSrc] = useState(null);
  const [selectedHair, setSelectedHair] = useState(1);
  const [selectedEye, setSelectedEye] = useState(1);
  const [selectedNose, setSelectedNose] = useState(1);
  const [selectedMouth, setSelectedMouth] = useState(1);

  useEffect(() => {

    mergeImages([require("../images/base.png")])
      .then((src) => setSrc(src))
      .catch((err) => console.log(err));

  }, []);

  function merge(selection) {
    mergeImages([require("../images/base.png"), require("" + selection)])
      .then((src) => setSrc(src))
      .catch((err) => console.log(err));
  };

  const handleHairSelect = (direction) => {
    switch(direction){
        case "decrement":
            if(selectedHair == 1){
                setSelectedHair(3);
            }else{
                setSelectedHair(selectedHair - 1);
            }
        break;

        case "increment":
            if(selectedHair == 3){
                setSelectedHair(1);
            }else{
                setSelectedHair(selectedHair + 1);
            }
        break;
    }
  };

  const handleEyeSelect = (direction) => {
    switch(direction){
        case "decrement":
            if(selectedEye == 1){
                setSelectedEye(3);
            }else{
                setSelectedEye(selectedEye - 1);
                merge(`../images/eyes/eyes${selectedEye}.png`);
            }
        break;

        case "increment":
            if(selectedEye == 3){
                setSelectedEye(1);
            }else{
                setSelectedEye(selectedEye + 1);
            }
        break;
    }
  };

  const handleNoseSelect = (direction) => {
    switch(direction){
        case "decrement":
            if(selectedNose == 1){
                setSelectedNose(2);
            }else{
                setSelectedNose(selectedNose - 1);
            }
        break;

        case "increment":
            if(selectedNose == 2){
                setSelectedNose(1);
            }else{
                setSelectedNose(selectedNose + 1);
            }
        break;
    }
  };

  const handleMouthSelect = (direction) => {
    switch(direction){
        case "decrement":
            if(selectedMouth == 1){
                setSelectedMouth(3);
            }else{
                setSelectedMouth(selectedMouth - 1);
            }
        break;

        case "increment":
            if(selectedMouth == 3){
                setSelectedMouth(1);
            }else{
                setSelectedMouth(selectedMouth + 1);
            }
        break;
    }
  };



  return (
    <div className="home">
        <Topbar />
        <div className = "wrapper">
            <div className="image-container">
                <img src={src} alt="emoji preview" />
                <img src={require(`../images/hair/hair${selectedHair}.png`)} alt="hair preview" />
                <img src={require(`../images/eyes/eyes${selectedEye}.png`)} alt="eyes preview" />
                <img src={require(`../images/nose/nose${selectedNose}.png`)} alt="nose preview" />
                <img src={require(`../images/mouth/mouth${selectedMouth}.png`)} alt="mouth preview" />
            </div>
            <div className="options-container">
                <div className="options-wrapper">
                    <div className="emojis">
                        <div className="emoji">
                            <span>Hair</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => handleHairSelect("decrement")}>-</button>
                                <img className="base" src={require("../images/base.png")} />
                                <img src={require(`../images/hair/hair${selectedHair}.png`)} />
                                <button className="right-button" onClick={() => handleHairSelect("increment")}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Eyes</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => handleEyeSelect("decrement")}>-</button>
                                <img className="base" src={require("../images/base.png")} />
                                <img src={require(`../images/eyes/eyes${selectedEye}.png`)} />
                                <button className="right-button" onClick={() => handleEyeSelect("increment")}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Nose</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => handleNoseSelect("decrement")}>-</button>
                                <img className="base" src={require("../images/base.png")} />
                                <img src={require(`../images/nose/nose${selectedNose}.png`)} />
                                <button className="right-button" onClick={() => handleNoseSelect("increment")}>+</button>
                            </div>
                        </div>
                        <div className="emoji">
                            <span>Mouth</span>
                            <div className="feature-wrapper">
                                <button className="left-button" onClick={() => handleMouthSelect("decrement")}>-</button>
                                <img className="base" src={require("../images/base.png")} />
                                <img src={require(`../images/mouth/mouth${selectedMouth}.png`)} />
                                <button className="right-button" onClick={() => handleMouthSelect("increment")}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
