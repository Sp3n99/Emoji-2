import React from 'react'
import "./home.scss"
import Topbar from "../components/Topbar"

const Home = () => {
  return (
    <div className="home">
        <Topbar />
        <div className = "wrapper">
            <div className="image-container">
                <img src="https://www.dictionary.com/e/wp-content/uploads/2018/03/Thinking_Face_Emoji-Emoji-Island.png" />
                <form>
                    <input type="text" placeholder="Name" />
                </form>
            </div>
            <div className="options-container">
                <div className="options-wrapper">
                    <div className="option">
                        <h4>Eyes:</h4>
                        <div className="image-selector">
                            <img src="https://www.dictionary.com/e/wp-content/uploads/2018/03/Thinking_Face_Emoji-Emoji-Island.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home