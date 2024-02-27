import styled from "styled-components";
import Clear from "../assets/svg/Clear";
import DropDown from "../assets/svg/DropDown";
import DropUp from "../assets/svg/DropUp";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const InfoCard = ({ MOCK_DATA, isClicked, setIsClicked, setIsModal }) => {
  // eslint-disable-next-line react/prop-types
  const currentData = MOCK_DATA.filter((data) => data.id == isClicked)[0];

  const [guide1, setGuide1] = useState(false);
  const [guide2, setGuide2] = useState(false);

  const handleUpgrade = () => {
    //
  };

  const handleOn = () => {
    //
  };

  const handleOff = () => {
    //
  };

  const handleHardOff = () => {
    //
  };

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
          <InfoContent>{currentData?.cpu}vCPU</InfoContent>
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
      <GuideBox>
        <GuideTitle>연결 방법을 찾고 있나요?</GuideTitle>
        <GuideSubTitleBox>
          <DropDownBtn onClick={() => setGuide1((current) => !current)}>
            {guide1 ? <DropDown /> : <DropUp />}
          </DropDownBtn>
          <GuideSubTitle>Windows 원격 접속 연결 가이드</GuideSubTitle>
        </GuideSubTitleBox>
        {guide1 && (
          <GuideContentBox>
            <GuideContetItem>
              1. 키보드의 윈도우키를 누른 상태에서 R을 눌러 실행 창을 엽니다.
            </GuideContetItem>
            <GuideContetItem>
              2. mstsc를 입력하고 Enter를 누릅니다.
            </GuideContetItem>
            <GuideContetItem>
              3. 컴퓨터에 제공 받은 아이피(IP)를 입력하고 연결을 누릅니다.
            </GuideContetItem>
            <GuideContetItem>
              4. 사용자 이름에 제공 받은 사용자 이름(USERNAME)을, 암호에 제공
              받은 암호(PASSWORD)를 넣고 연결을 누릅니다.
            </GuideContetItem>
          </GuideContentBox>
        )}
        <GuideSubTitleBox>
          <DropDownBtn onClick={() => setGuide2((current) => !current)}>
            {guide2 ? <DropDown /> : <DropUp />}
          </DropDownBtn>
          <GuideSubTitle>MacOS 원격 접속 연결 가이드</GuideSubTitle>
        </GuideSubTitleBox>
        {guide2 && (
          <GuideContentBox>
            <GuideContetItem>
              1. App Store 에서 Microsoft Remote Desktop 을 검색합니다.
            </GuideContetItem>
            <GuideContetItem>2. 해당 앱을 다운로드 받습니다.</GuideContetItem>
            <GuideContetItem>
              3. Microsoft Remote Desktop 앱을 실행합니다.
            </GuideContetItem>
            <GuideContetItem>4. 상단의 + 아이콘을 누릅니다.</GuideContetItem>
            <GuideContetItem>5. Add PC 버튼을 누릅니다.</GuideContetItem>
            <GuideContetItem>
              6. PC Name에 제공 받은 접속 주소를 입력합니다.
            </GuideContetItem>
            <GuideContetItem>7. Add 버튼을 누릅니다.</GuideContetItem>
            <GuideContetItem>8. 새로 추가된 PC를 누릅니다.</GuideContetItem>
            <GuideContetItem>
              9. 발급 받은 사용자 이름과 암호를 입력합니다.
            </GuideContetItem>
          </GuideContentBox>
        )}
      </GuideBox>
      <FooterBox>
        <HighListBtn onClick={handleUpgrade}>업그레이드</HighListBtn>

        <SysBtnBox>
          <SysBtn onClick={handleOn}>전원 ON</SysBtn>
          <SysBtn onClick={handleOff}>전원 OFF</SysBtn>
          <RedBtn onClick={handleHardOff}>강제종료</RedBtn>
        </SysBtnBox>
      </FooterBox>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  background: white;
  height: 85vh;
  width: 500px;
  border-radius: 10px;
  padding: 25px;
  position: sticky;
  top: 80px;
  overflow-y: scroll;
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
  padding: 20px 0 30px 0;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 45px;
  border-bottom: 1px solid #e9ecef;
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

const GuideBox = styled.div`
  font-weight: 400;
  color: #495057;
  padding: 25px 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid #e9ecef;
`;

const GuideTitle = styled.h2`
  color: #495057;
  font-size: 20px;
`;

const GuideSubTitleBox = styled.div`
  display: flex;
  align-items: center;
`;

const GuideSubTitle = styled.h3`
  font-size: 16px;
`;

const GuideContentBox = styled.ol`
  background-color: #f8f9fb;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GuideContetItem = styled.li`
  font-size: 15px;
`;

const DropDownBtn = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

const FooterBox = styled.footer`
  width: 100%;
  background-color: #fff;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
`;

const SysBtnBox = styled.div`
  display: flex;
  gap: 10px;
  font-weight: 500;
`;

const SysBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  color: #868e96;
  border-radius: 15px;
  padding: 8px 10px;
  border: 1px solid #dee2e6;
  font-size: 15px;
  cursor: pointer;
`;

const HighListBtn = styled.button`
  color: var(--gradation, #48b2ff);
  border: 1px solid var(--gradation, #48b2ff);
  background: linear-gradient(90deg, #48b2ff 0.09%, #9747ff 99.87%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 8px 10px;
  border-radius: 15px;
  font-size: 15px;
  cursor: pointer;
`;

const RedBtn = styled.button`
  color: #d82424;
  border: 1px solid #d82424;
  font-size: 15px;
  border-radius: 15px;
  cursor: pointer;
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0);
`;

export default InfoCard;
