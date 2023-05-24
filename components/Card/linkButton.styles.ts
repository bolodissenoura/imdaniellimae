import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 400px;
  width: 200px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border: 1px solid #f5f5f5;
  border-radius: 8px;
  padding: 8px;
`;

export const Header = styled.div`
  height: 30px;
  display: flex;
  width: 100%;
`;

interface LittleCuteBallProps {
  color?: string;
}

export const LittleCuteBall = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props: LittleCuteBallProps) => props.color || "red"};
  margin: 5px;
`;

export const Title = styled.p`
  padding-left: 8px;
`;

export const ImageContainer = styled.div`
  margin: 10px auto;
  background-color: red;
  border-radius: 8px;
`;
