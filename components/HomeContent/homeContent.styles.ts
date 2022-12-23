import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 0px auto;
  width: 800px;
  height: 100vh;
`;

export const TextContent = styled.div`
  max-width: 760px;
  padding: 0px 20px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 120px;
  padding: 5px;
  background: linear-gradient(135deg, #5800ff 0%, #e900ff 100%);
  background-clip: unset;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Bremlin";
  @media (min-width: 600px) {
    font-size: 60px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Bremlin";
  font-size: 38px;
  color: #f2f2f2;
  padding: 8px;
  font-weight: 500;
  @media (min-width: 600px) {
    font-size: 16px;
  }
`;
