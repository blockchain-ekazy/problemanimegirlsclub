import React, { useState } from "react";
import "./Home.css";

import Img1 from "../Imgs/logo.png";
import Img2 from "../Imgs/carto.gif";
import Img3 from "../Imgs/twitter.png";
import Img4 from "../Imgs/instagram.png";
import Img5 from "../Imgs/discord.png";

import MintBtn from "./MintBtn";

export default function Home() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="AAA">
      <div className="container-fluid UUU">
        <div className="row pt-3 pb-3">
          <div className="col-md-4"></div>
          <div className="col-md-4 text-center">
            <img className="w-100" src={Img1} />
            {/* <a
              className="linki"
              href="https://www.problemanimegirlsclub.com/public-mint-coming-june-2022/"
              target="_blank"
            >
              {" "}
              <h1 className="magc pt-4">ABOUT MAGC</h1>
            </a> */}
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <div className="container">
        <div className="row carto align-items-center ">
          <div className="col-md-5">
            <img className="w-100" src={Img2} />
          </div>
          <div className="col-md-7 text-center">
            <h1 className="text-white ist">1ST IMPACT!</h1>
            <h1 className="text-white chari">Character Collection</h1>
            {/* <div className="pt-3">
              <button className="tbd ml-2  ">CONNECT</button>
            </div>
            <div className=" d-flex justify-content-center align-items-center pt-5  ">
              <button
                className="count btn mx-4 "
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity == 1}
              >
                -
              </button>
              <span className="quantity "> {quantity} </span>
              <button
                className="count btn mx-3 "
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div> */}
            <div className=" pt-5 text-center bgm">
                <MintBtn />
              
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  ">
        <div className="row ico">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <a href="https://twitter.com/rauDesign" style={{cursor:"pointer"}} target="_blank">

            <img className="px-1 icon" src={Img3} />
            </a>
            <a href="https://www.instagram.com/problemanimegc/"  style={{cursor:"pointer"}} target="_blank">

            <img className="px-1 icon" src={Img4} />
            </a>
            <a href="https://discord.com/invite/WhKrbAgRpQ"  style={{cursor:"pointer"}} target="_blank">
            <img className="px-1 icon" src={Img5} />

            </a>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}
