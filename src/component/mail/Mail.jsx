import React from "react";
import './mail.css'
import {  useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiDraftLine,RiRefreshLine,RiArrowLeftLine,RiArrowRightLine } from "react-icons/ri";
import { BsCircleFill,BsTagFill,BsFillEyeFill,BsExclamationLg} from "react-icons/bs";
import { GrMail,GrLogout,GrInbox,GrMailOption } from "react-icons/gr";
import {IoMdNotifications,IoMdTrash,IoMdSearch } from "react-icons/io";
import useAuth from "../UseAuth";
import Data from "./mailData";

const Mail = () => {
  const { authed, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return <div className="main-mail-cnt">
    <div className="header-mail">
      <div className="frst">
        <span className="frst-i"><GiHamburgerMenu/></span><span className="frst-i"><input type="search" placeholder="search for something" /> </span>
      </div>
      <div className="secoand"><span className="secoand-i"><GrMail/></span><span className="secoand-i"><IoMdNotifications/></span>{authed && <button className="secoand-i" onClick={handleLogout}><GrLogout/></button>}</div>
    </div>
    <div className="body-mail">
      <div className="body-left">
        <button>Compose Mail</button>
        <ul className="folders">FOLDERS
          <li><GrInbox/> Inbox</li>
          <li><GrMailOption/> Send Mail</li>
          <li><RiDraftLine/> Draft</li>
          <li><IoMdTrash/> Trash</li>
        </ul>
        <ul className="categories">CATEGORIES
          <li><BsCircleFill/> Work</li>
          <li><BsCircleFill/> Document</li>
          <li><BsCircleFill/> Social</li>
          <li><BsCircleFill/> Client</li>
        </ul>
        <ul className="labels"> <div>LABELS</div> <div className="list">  <li><BsTagFill/>Family</li>
          <li><BsTagFill/>Work</li>
          <li><BsTagFill/>Home</li>
          <li><BsTagFill/>Holidays</li></div>
        
        </ul>
      </div>
      <div className="body-right">
        <div className="right-head">
          <div className="right-head-frst">
            <span className="heading">Inbox(16)</span><span className="search"><input type="search" placeholder="search email" /><IoMdSearch/> </span>
          </div>
          <div className="right-head-secoand">
            <div className="left"><span> <RiRefreshLine/>Refresh </span><span> <BsFillEyeFill/> </span><span> <BsExclamationLg/> </span><span> <IoMdTrash/> </span></div><div className="right"><span> <RiArrowLeftLine/> </span> <span> <RiArrowRightLine/> </span> </div>
          </div>
        </div>
        <div className="right-body">
          <ul>
            {
              Data.map((val,key)=>{
                return (
                  <li key={key}>
                   <span><input type="checkbox"  /></span> <span>{val.Name}</span><span>{val.Msg}</span><span>{val.Date}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  </div>;
};

export default Mail;
