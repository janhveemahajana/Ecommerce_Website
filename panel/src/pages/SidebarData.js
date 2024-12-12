import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/Home",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Shop",
    path: "/shop",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Shop Detail",
    icon: <FaIcons.FaPhone />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "DashBoard",
        path: "/detail",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Related Products",
        path: "/relatedproducts",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Page",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Cart",
        path: "/cart",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Checkout",
        path: "/checkout",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Testimonial",
        path: "/testimonial",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "404 Page",
        path: "/404Page",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Contact",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
