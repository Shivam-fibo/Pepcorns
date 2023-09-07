import React from "react";
import "./DeckInfo.css";
import { AiOutlineCloudDownload } from "react-icons/ai";
import img1 from "../images/one.png";
import img2 from "../images/two.png";
import img3 from "../images/three.png";
import img4 from "../images/four.png";
import img5 from "../images/five.png";
import img6 from "../images/six.png";
import img7 from "../images/seven.png";
import img8 from "../images/eight.png";
import img9 from "../images/nine.png";
const DeckInfo = () => {
  return (
    <div >
      <div className="d_container">
        <div className="border">
        <div className="d_images">
          <img src={img1} width={650} height={300} alt="" /> <br />
          <img src={img2} width={650} height={300} alt="" /> <br />
          <img src={img3} width={650} height={300} alt="" /> <br />
          <img src={img4} width={650} height={300} alt="" /> <br />
          <img src={img5} width={650} height={300} alt="" /> <br />
          <img src={img6} width={650} height={300} alt="" /> <br />
          <img src={img7} width={650} height={300} alt="" /> <br />
          <img src={img8} width={650} height={300} alt="" /> <br />
          <img src={img9} width={650} height={300} alt="" />
        </div>
        </div>
        <div className="d_info">
          <div className="d_heading">
          <h3>Documents</h3>

          <a href="https://api.pepcorns.com/clientassets/icon1677255822062.zip">
            CostQ.zip{" "}
            <div className="gap"></div>
            <span className="d_logo"> 
              <AiOutlineCloudDownload />
            </span>{" "}
          </a>
          </div>
          <div className="box1">
            <h3>₹ 5000</h3>
            <p>
              Rewards
              <br />
              <li>Community access & benefits .</li>
              <br />
              Terms and Conditions
              <br />
              Community participants offer
            </p>
          </div>
          <div className="box2">
            <h3> ₹ 10000</h3>
            <br />
            Rewards
            <li> Community access & involvement.</li>
            <li> Be part of our growth journey. </li>
            <br />
            Terms and Conditions
            <br />
            Community participants offer
            <br />
            CSOP Limited ( <b>73</b> of <b>100</b> left)
          </div>
          <br />
          <div className="box3">
            <h3> ₹ 25000</h3>
            <br />
            Rewards
            <br />
            <li> Community access & benefits</li>
            <li> Special mention in our community group.</li>
            <br />
            Terms and Conditions
            <br />
            Community participants offer.
            <br />
            CSOP Limited ( <b>43</b> of <b>50</b> left)
          </div>
          <div className="box4">
            <h3> ₹ 50000 </h3>
            <br />
            Rewards
            <br />
            <li> Community perks & notable mention</li>
            <li> Community access & benefits</li>
            <br />
            <b>Terms and Conditions</b>
            <br />
            Community participants offer. CSOP Limited (<b>17</b> of <b>20</b>{" "}
            left)
          </div>
          <div className="box5">
            <h3> ₹ 80000 </h3>
            <br />
            <br />
            <li>
              All of the above + early access to our newly launched product for
              feedback.
            </li>
            <br />
            <b>Terms and Conditions </b>
            <br />
            Community participants offer.CSOP Limited ( <b>5</b> of <b>10</b>{" "}
            left)
          </div>
          <div className="box6">
            <h3> ₹ 90000 </h3>
            <br />
            <b>Rewards</b>
            <br />
            <li>All of the above + Receive a fresh coupon each quarter!</li>
            <b>Terms and Conditions </b>
            <br />
            Community participants offer. ₹90000 CSOP Limited ( <b>3</b> of{" "}
            <b>5</b> left)
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeckInfo;
