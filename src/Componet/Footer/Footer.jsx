import React from 'react'
import logo from "../Navbar/logo.png"
import "./Footer.css"
import {BiLogoFacebookCircle} from "react-icons/bi"
import {AiFillInstagram} from "react-icons/ai"
import {BiLogoTwitter} from "react-icons/bi"
import {AiFillLinkedin} from "react-icons/ai"
import {BiLogoDiscordAlt} from "react-icons/bi"
import {BiLogoTelegram} from "react-icons/bi"
import {AiOutlineMail}  from "react-icons/ai"
import {CiLocationOn} from "react-icons/ci"

const Footer = () => {
  return (
    <div>
        <div className="footer">
        <div className="footer_container">
      <div className="row_one">
      <div className="logo">
            <img src={logo} width= {100} height={25} alt="" />
        </div>
        <div className="para">
            <p>Enabling everyday people to invest <br />
in startups they believe in</p>
        </div>
        <div className="social_media">
            <BiLogoFacebookCircle/>
            <AiFillInstagram/>
            <BiLogoTwitter/>
            <AiFillLinkedin/>
            <BiLogoDiscordAlt/>
            <BiLogoTelegram/>

        </div>
      </div>
      <div className="row_two">
        <div className="heading"><p>For investmenet</p></div>
        <div className="para_two">
            <a href="https://app.pepcorns.com/login" class="custom-link">Start Investing</a> <br />
            <a href="https://app.pepcorns.com/login" class="custom-link">How investing Work</a> <br />
            <a href="https://app.pepcorns.com/login" class="custom-link">Terms of use</a>
        </div>
      </div>
      <div className="row_three">
      <div className="heading"><p>For Startups</p></div>
      

         <a href="https://form.jotform.com/220281864046454"  class="custom-link">  Raise Capital</a> <br />
         <a href="https://www.pepcorns.com/knowledgebase/company"  class="custom-link">  How it works</a> <br />
         <a href="https://www.pepcorns.com/knowledgebase/investors"  class="custom-link">   Instruments</a> <br />
        <a href="https://www.pepcorns.com/privacy"  class="custom-link">Privacy </a>
      </div>
      <div className="row_four">
      <div className="heading"><p>Company</p></div>

        <a href="#"  class="custom-link"> About</a> <br />
        <a href="#"  class="custom-link"> Blog</a> <br />
        <a href="#"  class="custom-link"> FAQ</a> <br />
        <a href="#"  class="custom-link"> Contact</a> <br />
        <a href="#"  class="custom-link"> We're hiring</a> <br />
      </div>
      <div className="row_five">
        <CiLocationOn/><span>   Kanpur| Bengaluru |Delhi </span> <br />
        <AiOutlineMail/> <span> <a href="mailto:support@pepcorns.com"  class="custom-link" >support@pepcorns.com</a></span>
      </div>
    </div>
    <div className="gap_h"></div>
    <div className="footer_info">
    www.pepcorns.com (“Platform”) is a website owned and operated by Pepcorns Technologies Private Limited (“Pepcorns”), which is neither a registered stock exchange, an investment advisor nor a funding portal and is not registered with the Securities Exchange Board of India (“SEBI”). Nothing contained on this Platform shall be construed as an authorization by the SEBI to solicit investments nor should the Platform be construed as a SEBI authorized crowdfunding platform or a stock exchange, or their equivalent. The securities offered by any company registered on Platform are not traded on any stock exchange recognised by SEBI. Pepcorns does not allow any secondary market trading of securities on the Platform. By accessing this Platform and any pages thereof, you agree to be bound by the Terms of Use and Privacy Policy . Investing in start-ups and early-stage businesses involves risks, including illiquidity, lack of dividends, loss of investment and dilution, and it should be done only as part of a diversified portfolio. Pepcorns is targeted exclusively at investors who are sufficiently sophisticated to understand these risks and make their own investment decisions. Please read our RISK POLICY .
    </div>
    </div>
  
    </div>
  )
}

export default Footer
