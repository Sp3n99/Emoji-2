import React, { useEffect, useState } from "react";
import "./home.scss"
import Topbar from "../components/Topbar"
import mergeImages from 'merge-images-v2'
import base from "../images/base.png"

export default function Home() {
  const [src, setSrc] = useState(null);
  const [selectedHair, setSelectedHair] = useState(1);
  const [selectedEye, setSelectedEye] = useState(1);
  const [selectedNose, setSelectedNose] = useState(1);
  const [selectedMouth, setSelectedMouth] = useState(1);

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

  const handleHairSelect = (direction) => {
    switch(direction){
        case "decrement":
            if(selectedEye == 1){
                setSelectedHair(2);
            }else{
                setSelectedHair(selectedHair - 1);
            }
        break;

        case "increment":
            if(selectedHair == 2){
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
                setSelectedEye(2);
            }else{
                setSelectedEye(selectedEye - 1);
            }
        break;

        case "increment":
            if(selectedEye == 2){
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
                setSelectedMouth(2);
            }else{
                setSelectedMouth(selectedMouth - 1);
            }
        break;

        case "increment":
            if(selectedMouth == 2){
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
                <form>
                    <input type="text" placeholder="Name"/>
                </form>
            </div>
            <div className="options-container">
                <div className="options-wrapper">
                    <div className="titles">
                        <span>Hair</span>
                        <span>Eyes</span>
                        <span>Nose</span>
                        <span>Mouth</span>
                    </div>
                    <div className="emojis">
                        <div className="feature-wrapper">
                            <button className="left-button" onClick={() => handleHairSelect("decrement")} />
                            <img className="base" src={base} />
                            <img src={require(`../images/hair/hair${selectedHair}.png`)} />
                            <button className="right-button" onClick={() => handleHairSelect("increment")} />
                        </div>
                        <div className="feature-wrapper">
                            <button className="left-button" onClick={() => handleEyeSelect("decrement")} />
                            <img className="base" src={base} />
                            <img src={require(`../images/eyes/eyes${selectedEye}.png`)} />
                            <button className="right-button" onClick={() => handleEyeSelect("increment")} />
                        </div>
                        <div className="feature-wrapper">
                            <button className="left-button" onClick={() => handleNoseSelect("decrement")}/>
                            <img className="base" src={base} />
                            <img src={require(`../images/nose/nose${selectedNose}.png`)} />
                            <button className="right-button" onClick={() => handleNoseSelect("increment")}/>
                        </div>
                        <div className="feature-wrapper">
                            <button className="left-button" onClick={() => handleMouthSelect("decrement")}/>
                            <img className="base" src={base} />
                            <img src={require(`../images/mouth/mouth${selectedMouth}.png`)} />
                            <button className="right-button" onClick={() => handleMouthSelect("increment")}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
