import React from "react";

import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Footer() {
  return (
    <footer className="text-center">
      <a
        className="icon px-3"
        href="https://github.com/LuckySal"
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon={brands("github")} size="4x" />
      </a>
      <a
        className="icon px-3"
        href="https://www.linkedin.com/in/brandon-hill-74a756154/"
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon={brands("linkedin")} size="4x" />
      </a>
      <a
        className="icon px-3"
        href="mailto:hillbp2014@gmail.com"
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon={solid("envelope")} size="4x" />
      </a>
    </footer>
  );
}
