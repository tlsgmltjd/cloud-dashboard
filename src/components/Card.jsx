import styled from "styled-components";
import LeftArrow from "../assets/svg/LeftArrow";

// eslint-disable-next-line react/prop-types
const Card = ({ id, exp, price, setIsModal, isClicked, setIsClicked }) => {
  const onExtend = () => {};

  return (
    <Container isClicked={isClicked} id={id}>
      <CardHeader>
        <IdBox>
          <Id>ID</Id>
          <IdValue>{id}</IdValue>
        </IdBox>
        <InfoBtn
          onClick={() => {
            setIsModal(true);
            setIsClicked(id);
          }}
        >
          <LeftArrow />
        </InfoBtn>
      </CardHeader>
      <Content>만료일 : {exp}</Content>
      <Content>가격 : {price}원</Content>
      <Btn onClick={onExtend}>연장하기</Btn>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 16px 24px;
  width: 500px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  gap: 20px;
  border: ${({ isClicked, id }) =>
    isClicked == id ? "1px solid rgba(72, 178, 255, 1)" : "1px solid white"};
`;

const InfoBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: none;
  cursor: pointer;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9ecef;
`;

const IdBox = styled.div`
  font-size: 18px;
  display: flex;
  gap: 10px;
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

const IdValue = styled.span``;

const Content = styled.p`
  color: #868e96;
  font-weight: 400;
  margin: 0;
`;

const Btn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: 1px solid #dee2e6;
  padding: 7px 13px;
  width: 80px;
  border-radius: 30px;
  color: #868e96;
  cursor: pointer;
`;

export default Card;
