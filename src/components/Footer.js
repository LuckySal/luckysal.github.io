import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Footer() {
  return (
    <footer>
      <a className="icon" href="https://github.com/LuckySal">
        <FontAwesomeIcon icon={brands("github")} />
      </a>
      <a
        className="icon"
        href="https://www.linkedin.com/in/brandon-hill-74a756154/">
        <FontAwesomeIcon icon={brands("linkedin")} />
      </a>
      <a className="icon" href="mailto:dev@luckysal.com">
        <FontAwesomeIcon icon={regular("envelope")} />
      </a>
    </footer>
  );
}
