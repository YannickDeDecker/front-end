import React from "react";
import "./Showcase.css";
import styled, { keyframes } from "styled-components";
import { fadeInDown, slideInUp } from "react-animations";

export default function Showcase() {
  const bounceAnimation = keyframes`${fadeInDown}`;
  const slideAnimation = keyframes`${slideInUp}`;

  const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
  `;

  const SlideDiv = styled.div`
  animation: 3s ${slideAnimation};
`;

  return (
    <div id="showcase-container">
      <BouncyDiv><h1>welkom bij cookr</h1></BouncyDiv>
      <SlideDiv><h2>Browse tussen mijn favoriete recepten</h2></SlideDiv>
    </div>
  );
}
