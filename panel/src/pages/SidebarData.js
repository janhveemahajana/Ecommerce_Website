import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Hero",
        path: "/hero",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Slider",
        path: "/slider",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Services",
        path: "/services",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Facts",
        path: "/facts",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Our Deals",
        path: "/deals",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Vegetable Shop",
        path: "/vegetableshop",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Exotic Fruits",
        path: "/exoticfruits",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Shop",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Shop Product",
        path: "/shop",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Banner",
        path: "/banner",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Shop Detail",
    icon: <FaIcons.FaPhone />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Products",
        path: "/detail",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Related Products",
        path: "/relatedproducts",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Reviews",
        path: "/reviews",
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
    ],
  },
  {
    title: "Contact",
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Contact Data",
        path: "/contactdata",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Contact List",
        path: "/contactlist",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
