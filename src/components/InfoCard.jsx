import styled from "styled-components";
import Clear from "../assets/svg/Clear";

// eslint-disable-next-line react/prop-types
const InfoCard = ({ MOCK_DATA, isClicked, setIsClicked, setIsModal }) => {
  // eslint-disable-next-line react/prop-types
  const currentData = MOCK_DATA.filter((data) => data.id == isClicked)[0];

  return (
    <InfoContainer>
      <BoxHeader>
        <IDBox>
          <Id>ID</Id>
          {currentData.id}
        </IDBox>
        <ClearBtn
          onClick={() => {
            setIsModal(false);
            setIsClicked("");
          }}
        >
          <Clear />
        </ClearBtn>
      </BoxHeader>
      <InfoBox>
        <InfoItem>
          <InfoTitle>시작일</InfoTitle>
          <InfoContent>{currentData?.start_date}</InfoContent>
        </InfoItem>
        <InfoItem>
          <InfoTitle>만료일</InfoTitle>
          <InfoContent>{currentData?.expiration_date}</InfoContent>
        </InfoItem>
        <InfoItem>
          <InfoTitle>CPU</InfoTitle>
          <InfoContent>{currentData?.cpu}CPU</InfoContent>
        </InfoItem>
        <InfoItem>
          <InfoTitle>메모리</InfoTitle>
          <InfoContent>{currentData?.memory}GIB</InfoContent>
        </InfoItem>
        <InfoItem>
          <InfoTitle>디스크</InfoTitle>
          <InfoContent>{currentData?.disk}GIB</InfoContent>
        </InfoItem>
        <InfoItem>
          <InfoTitle>대역폭</InfoTitle>
          <InfoContent>{currentData?.bandwidth}Mbps</InfoContent>
        </InfoItem>
        <InfoItem>
          <InfoTitle>원격 접속 주소</InfoTitle>
          <InfoContent>{currentData?.remote_access_address}</InfoContent>
        </InfoItem>
        <InfoItem>
          <InfoTitle>서비스 주소</InfoTitle>
          <InfoContent>{currentData?.service_address}</InfoContent>
        </InfoItem>
        <InfoItem>
          <InfoTitle>사용자 이름</InfoTitle>
          <InfoContent>
            {currentData.username != null ? currentData.username : "미정"}
          </InfoContent>
        </InfoItem>
        <InfoItem>
          <InfoTitle>기본 비밀번호</InfoTitle>
          <InfoContent>
            {currentData.default_password != null
              ? currentData.default_password
              : "미정"}
          </InfoContent>
        </InfoItem>
        <InfoItem>
          <InfoTitle>가격</InfoTitle>
          <InfoContent>{currentData?.price}원</InfoContent>
        </InfoItem>
      </InfoBox>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  background: white;
  height: 85vh;
  width: 500px;
  border-radius: 10px;
  padding: 25px;
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

const InfoBox = styled.ul`
  padding: 20px 0 20px 0;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const InfoTitle = styled.h3`
  color: #495057;
`;

const InfoContent = styled.p`
  color: #868e96;
`;

export default InfoCard;
