import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import React from "react";
const sublinks = [
  {
    page: "products",
    links: [
      {
        label: "payment",
        icon: <FaCreditCard />,
        url: "/products",
        description: "Online payments",
      },
      {
        label: "terminal",
        icon: <FaCreditCard />,
        url: "/products",
        description: "In-person payments",
      },
      {
        label: "connect",
        icon: <FaCreditCard />,
        url: "/products",
        description: "Payments for platforms",
      },
    ],
  },
  {
    page: "developers",
    links: [
      { label: "plugins", icon: <FaBook />, url: "/products" },
      { label: "libraries", icon: <FaBook />, url: "/products" },
      { label: "help", icon: <FaBook />, url: "/products" },
      { label: "billing", icon: <FaBook />, url: "/products" },
    ],
  },
  {
    page: "company",
    links: [
      { label: "about", icon: <FaBriefcase />, url: "/products" },
      { label: "customers", icon: <FaBriefcase />, url: "/products" },
    ],
  },
];

export default sublinks;
