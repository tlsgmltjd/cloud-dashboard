import styled from "styled-components";
import Clear from "../assets/svg/Clear";

// eslint-disable-next-line react/prop-types
const InfoCard = ({ MOCK_DATA, isClicked, setIsModal }) => {
  // eslint-disable-next-line react/prop-types
  const currentData = MOCK_DATA.filter((data) => data.id == isClicked)[0];

  return (
    <InfoContainer>
      <BoxHeader>
        <IDBox>
          <Id>ID</Id>
          {currentData.id}
        </IDBox>
        <ClearBtn onClick={() => setIsModal(false)}>
          <Clear />
        </ClearBtn>
      </BoxHeader>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  background: white;
  height: 85vh;
  width: 500px;
  border-radius: 10px;
  padding: 20px;
`;

const Id = styled.span`
  background: var(
    --gradation,
    linear-gradient(90deg, #48b2ff 0.09%, #9747ff 99.87%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BoxHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;
`;

const IDBox = styled.div`
  font-size: 22px;
  display: flex;
  gap: 10px;
`;

const ClearBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;

export default InfoCard;
