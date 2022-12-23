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
`;

export const Title = styled.h1`
  font-size: 60px;
  padding: 5px;
  background: linear-gradient(135deg, #678983 0%, #e6ddc4 100%);
  background-clip: unset;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Bremlin";
`;

export const Subtitle = styled.p`
  font-family: "Bremlin";
  font-size: 16px;
  color: #f2f2f2;
  padding: 8px;
  font-weight: 500;
`;
