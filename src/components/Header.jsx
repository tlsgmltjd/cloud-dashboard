import styled from "styled-components";

import LOGO from "../assets/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <Img src={LOGO} />
      <Title>AL CLOUD DASHBOARD</Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  border-bottom: 2px solid rgba(248, 249, 251, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Img = styled.img``;

const Title = styled.h1`
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  background: var(
    --gradation,
    linear-gradient(90deg, #48b2ff 0.09%, #9747ff 99.87%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin: 0;
`;

export default Header;
