import React from "react";
import { AiFillGithub, AiOutlineCopyrightCircle } from "react-icons/ai";

import { FooterContainer } from "./styles";
import { Wrapper } from "../../../styles/shared";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <ul>
          <li className="copyright">
            <AiOutlineCopyrightCircle />
            2021 GitHub, Inc.
          </li>
          <li>
            <a
              href="https://docs.github.com/en/github/site-policy/github-terms-of-service"
              target="_blank"
              rel="noreferrer"
            >
              Terms
            </a>
          </li>
          <li>
            <a
              href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="https://github.com/security"
              target="_blank"
              rel="noreferrer"
            >
              Security
            </a>
          </li>
          <li>
            <a
              href="https://www.githubstatus.com/"
              target="_blank"
              rel="noreferrer"
            >
              Status
            </a>
          </li>
          <li>
            <a href="https://docs.github.com" target="_blank" rel="noreferrer">
              Docs
            </a>
          </li>
          <li>
            <a
              className="logo"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://support.github.com/?tags=dotcom-footer"
              target="_blank"
              rel="noreferrer"
            >
              Contact GitHub
            </a>
          </li>
          <li>
            <a
              href="https://github.com/pricing"
              target="_blank"
              rel="noreferrer"
            >
              Pricing
            </a>
          </li>
          <li>
            <a href="https://docs.github.com" target="_blank" rel="noreferrer">
              API
            </a>
          </li>
          <li>
            <a
              href="https://services.github.com/"
              target="_blank"
              rel="noreferrer"
            >
              Training
            </a>
          </li>
          <li>
            <a href="https://github.blog/" target="_blank" rel="noreferrer">
              Blog
            </a>
          </li>
          <li>
            <a href="https://github.com/about" target="_blank" rel="noreferrer">
              About
            </a>
          </li>
        </ul>
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;
