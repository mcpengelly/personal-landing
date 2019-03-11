import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaStackOverflow, FaYoutube } from "react-icons/fa";

const SocialMediaBar = props => {
  const linkStyles = { padding: "5px" };
  return (
    <div className="social-media-icons">
      <a style={linkStyles} href="https://github.com/mcpengelly">
        <FaGithub size="2em" />
      </a>
      <a style={linkStyles} href="https://stackoverflow.com/users/7664140/matt-pengelly">
        <FaStackOverflow size="2em" />
      </a>
      <a style={linkStyles} href="https://www.linkedin.com/in/matt-pengelly-575ba886">
        <FaLinkedin size="2em" />
      </a>
      <a style={linkStyles} href="https://twitter.com/typycyl">
        <FaTwitter size="2em" />
      </a>
      <a style={linkStyles} href="https://www.instagram.com/pen_jelly/">
        <FaInstagram size="2em" />
      </a>
      <a style={linkStyles} href="https://www.youtube.com/channel/UCeOFYxgeuV7p7Ve97sg8Zrg/featured?view_as=subscriber">
        <FaYoutube size="2em" />
      </a>
    </div>
  );
};

export default SocialMediaBar;
