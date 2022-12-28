import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 0px auto;
  width: 800px;
  height: 100vh;

  .fBall {
    top: 50%;
    left: 50%;
    background-color: #5800ff;
    animation: animation-3 10s infinite;
  }

  .sBall {
    top: 100;
    left: 70%;
    background-color: #2192ff;
    animation: animation-3 10s infinite;
  }

  .tBall {
    top: 10;
    left: 30%;
    background-color: #e900ff;
    animation: animation-3 10s infinite;
  }

  .features-gradients {
    position: absolute;
    background-color: rgba(1, 1, 1, 0.25);
    filter: blur(12em);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .features-gradient {
    width: 200px;
    height: 200px;
    top: 0;
    position: absolute;
  }

  @keyframes animation-1 {
    0% {
      transform: translateY(-50%) translateX(-50%) translateX(-15%)
        translateY(10%);
    }
    20% {
      transform: translateY(-50%) translateX(-50%) translateX(-20%)
        translateY(-30%);
    }
    40% {
      transform: translateY(-50%) translateX(-50%) translateX(-25%)
        translateY(-15%);
    }
    60% {
      transform: translateY(-50%) translateX(-50%) translateX(30%)
        translateY(20%);
    }
    80% {
      transform: translateY(-50%) translateX(-50%) translateX(5%)
        translateY(35%);
    }
    to {
      transform: translateY(-50%) translateX(-50%) translateX(-15%)
        translateY(10%);
    }
  }
  @keyframes animation-2 {
    0% {
      transform: translateY(-50%) translateX(-50%) rotate(-20deg)
        translateX(20%);
    }
    25% {
      transform: translateY(-50%) translateX(-50%) skew(-15deg, 15deg)
        rotate(-80deg) translateX(30%);
    }
    50% {
      transform: translateY(-50%) translateX(-50%) rotate(180deg)
        translateX(25%);
    }
    75% {
      transform: translateY(-50%) translateX(-50%) skew(-15deg, 15deg)
        rotate(240deg) translateX(15%);
    }
    to {
      transform: translateY(-50%) translateX(-50%) rotate(340deg)
        translateX(20%);
    }
  }
  @keyframes animation-3 {
    0% {
      transform: translateY(-50%) translateX(-50%) translateX(-15%)
        translateY(10%);
    }
    20% {
      transform: translateY(-50%) translateX(-50%) translateX(20%)
        translateY(-30%);
    }
    40% {
      transform: translateY(-50%) translateX(-50%) translateX(-25%)
        translateY(-15%);
    }
    60% {
      transform: translateY(-50%) translateX(-50%) translateX(30%)
        translateY(20%);
    }
    80% {
      transform: translateY(-50%) translateX(-50%) translateX(5%)
        translateY(35%);
    }
    to {
      transform: translateY(-50%) translateX(-50%) translateX(-15%)
        translateY(10%);
    }
  }
`;

export const TextContent = styled.div`
  max-width: 760px;
  padding: 0px 20px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: "cartoon";
  background: linear-gradient(135deg, #f2f2f2 0%, #f2f2f2 100%);
  background-clip: unset;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 5px;
  font-size: 120px;

  @media (min-width: 600px) {
    font-size: 100px;
  }
`;

export const Subtitle = styled.p`
  color: #f2f2f2;
  padding: 8px;
  font-weight: 500;
  font-size: 16px;

  @media (min-width: 600px) {
    font-size: 16px;
  }
`;
