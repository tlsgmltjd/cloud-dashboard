import styled from "styled-components";

const Card = () => {
  return (
    <Container>
      <IdBox>
        <Id>ID</Id>
        <IdValue>1234-asdf-asdf-asdf</IdValue>
      </IdBox>
      <Content>만료일 : 2023-10-10 10:10:10</Content>
      <Content>가격 : 12342038409원</Content>
      <Btn>연장하기</Btn>
    </Container>
  );
};

const Container = styled.div``;

const IdBox = styled.div``;

const Id = styled.span``;

const IdValue = styled.span``;

const Content = styled.p``;

const Btn = styled.button``;

export default Card;
