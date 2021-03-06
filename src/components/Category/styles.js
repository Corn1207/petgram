import styled from "styled-components";

const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  width: 75px;
  height: 75px;
  overflow: hidden;
  object-fit: cover;
`;

export { Anchor, Image };
