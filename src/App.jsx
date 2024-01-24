import styled from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";
import InfoCard from "./components/InfoCard";
import { useState } from "react";

const MOCK_DATA = [
  {
    id: "1234-asdf-asdf-asdf",
    start_date: "2023-01-01 10:10:10",
    expiration_date: "2023-01-01 10:10:10",
    cpu: "2v",
    memory: 2,
    disk: 30,
    bandwidth: 10,
    remote_access_address: "raplegend.cloud:8080 -> 8080",
    service_address: "raplegend.cloud:8080 -> 8080",
    username: "신희성",
    default_password: "springboot123",
    price: 510000000,
  },
  {
    id: "1234-qwer-asdf-asdf",
    start_date: "2023-01-01 10:10:10",
    expiration_date: "2023-01-01 10:10:10",
    cpu: "2v",
    memory: 2,
    disk: 30,
    bandwidth: 10,
    remote_access_address: "raplegend.cloud:8080 -> 8080",
    service_address: "raplegend.cloud:8080 -> 8080",
    username: "신희성",
    default_password: "springboot123",
    price: 510000000,
  },
  {
    id: "1234-hjkl-asdf-asdf",
    start_date: "2023-01-01 10:10:10",
    expiration_date: "2023-01-01 10:10:10",
    cpu: "2v",
    memory: 2,
    disk: 30,
    bandwidth: 10,
    remote_access_address: "raplegend.cloud:8080 -> 8080",
    service_address: "raplegend.cloud:8080 -> 8080",
    username: "신희성",
    default_password: "springboot123",
    price: 510000000,
  },
  {
    id: "1234-drgf-asdf-asdf",
    start_date: "2023-01-01 10:10:10",
    expiration_date: "2023-01-01 10:10:10",
    cpu: "2v",
    memory: 2,
    disk: 30,
    bandwidth: 10,
    remote_access_address: "raplegend.cloud:8080 -> 8080",
    service_address: "raplegend.cloud:8080 -> 8080",
    username: "신희성",
    default_password: "springboot123",
    price: 510000000,
  },
  {
    id: "1234-wsdf-asdf-asdf",
    start_date: "2023-01-01 10:10:10",
    expiration_date: "2023-01-01 10:10:10",
    cpu: "2v",
    memory: 2,
    disk: 30,
    bandwidth: 10,
    remote_access_address: "raplegend.cloud:8080 -> 8080",
    service_address: "raplegend.cloud:8080 -> 8080",
    username: "신희성",
    default_password: "springboot123",
    price: 510000000,
  },
  {
    id: "1234-etvd-asdf-asdf",
    start_date: "2023-01-01 10:10:10",
    expiration_date: "2023-01-01 10:10:10",
    cpu: "2v",
    memory: 2,
    disk: 30,
    bandwidth: 10,
    remote_access_address: "raplegend.cloud:8080 -> 8080",
    service_address: "raplegend.cloud:8080 -> 8080",
    username: "신희성",
    default_password: "springboot123",
    price: 510000000,
  },
];

function App() {
  const [isClicked, setIsClicked] = useState("");
  const [isModal, setIsModal] = useState(false);

  return (
    <Container>
      <Header />
      <Box>
        <CardList>
          {MOCK_DATA.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              exp={card.expiration_date}
              price={card.price}
              setIsModal={setIsModal}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
          ))}
        </CardList>
        {isModal && <InfoCard MOCK_DATA={MOCK_DATA} isClicked={isClicked} />}
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  gap: 30px;
  background: #f8f9fb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  padding-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 30px;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export default App;
