import React from "react";
import { MdDashboard, MdMail, MdLogin } from "react-icons/md";
import { IoIosFlask } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { FaChartPie, FaLaptop } from "react-icons/fa";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    link: "/Dashboard",
  },
  {
    title: "Layouts",
    icon: <IoDiamondOutline />,
    link: "/Layouts",
  },
  {
    title: "Graphs",
    icon: <VscGraph />,
    link: "/Graphs",
  },
  {
    title: "Mailbox",
    icon: <MdMail />,
    link: "/Mailbox",
  },
  {
    title: "Metrics",
    icon: <FaChartPie />,
    link: "/Metrics",
  },
  {
    title: "Widgets",
    icon: <IoIosFlask />,
    link: "/Widgets",
  },
  {
    title: "Login",
    icon: <MdLogin />,
    link: "/Loginform",
  },
  {
    title: "App View",
    icon: <FaLaptop />,
    link: "/App-view",
  },
];
