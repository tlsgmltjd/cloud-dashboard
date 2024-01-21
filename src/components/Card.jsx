import styled from "styled-components";
import LeftArrow from "../assets/svg/LeftArrow";

const Card = () => {
  return (
    <Container>
      <CardHeader>
        <IdBox>
          <Id>ID</Id>
          <IdValue>1234-asdf-asdf-asdf</IdValue>
        </IdBox>
        <LeftArrow />
      </CardHeader>
      <Content>만료일 : 2023-10-10 10:10:10</Content>
      <Content>가격 : 12342038409원</Content>
      <Btn>연장하기</Btn>
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
`;

export default Card;
