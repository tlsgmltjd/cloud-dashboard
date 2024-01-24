import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const InfoCard = ({ MOCK_DATA, isClicked }) => {
  // eslint-disable-next-line react/prop-types
  const currentData = MOCK_DATA.filter((data) => data.id == isClicked)[0];

  return <InfoContainer>{currentData.id}</InfoContainer>;
};

const InfoContainer = styled.div`
  background: white;
  height: 85vh;
  width: 500px;
  border-radius: 10px;
`;

export default InfoCard;
