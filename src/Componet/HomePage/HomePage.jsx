import React from "react";
import "./HomePage.css";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineCreditCard } from "react-icons/ai";
import logo from "../HomePage/logo.png";

const HomePage = () => {
  return (
    <div>
      <div className="h_container_head">
        <div className="h_left">
          <div className="small_logo">
            <img src={logo} width={25} height={25} alt="" />
          </div>
          <div className="name">
            <h3>CosIQ</h3>
            <p>Delhi,</p>
          </div>
        </div>
        <div className="h_right">
          <button className="h_btn">Save</button>
          <button className="h_btn">Share</button>
        </div>
      </div>
      <hr className="line" />
      <div className="h_container_one">
        <div className="heading">
          <p>Molecular skincare brand focussed on safe & visible results</p>
          <AiOutlineGlobal />{" "}
          <a href="https://mycosiq.com/">
            <span>https://mycosiq.com/</span>
          </a>
          <AiOutlineCreditCard /> <span>AAGCI5003E</span>
        </div>
        <div className="h_info">
          <div className="yt_video">
            <div className="video-container">
              <iframe
                width="780"
                height="300"
                src="https://www.youtube.com/embed/kFII05-bhGU"
                title="CosIQ for Pepcorns"
                frameborder="0"
                allowfullscreen
              ></iframe>
              <p>
                {" "}
                <a href="https://www.youtube.com/embed/kFII05-bhGU">
                  Unable to view video click here
                </a>
              </p>
            </div>
          </div>
          <div className="money_info">
            <p>&#8377;1455500 </p>
            <p>56.40 % of minimum goal raised</p>
            <hr />
            <p>144</p>
            <p>Total Investement</p>
            <div>
              <button className="btn_one">Login To Invest</button> <br />
              <button className="btn_two">Campaing Expired</button>
              <p>&#8377; 1000 Minimum Investment</p>
            </div>
          </div>
         
        </div>
        <div className="circle_btn">
            <button className="cirlce_btn_">Pitch</button> 
              <span className="gap"></span>
            <button className="cirlce_btn_">Details</button>
              <span className="gap"></span>
            <button className="cirlce_btn_">Discusstion</button>
              <span className="gap"></span>
            <button className="cirlce_btn_">Update</button>
              <span className="gap"></span>
          </div>
          <br />
      </div>
     
    </div>
  );
};

export default HomePage;
