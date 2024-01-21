import styled from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";

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
  return (
    <Container>
      <Header />
      <Box>
        {MOCK_DATA.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            exp={card.expiration_date}
            price={card.price}
          />
        ))}
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background: #f8f9fb;
`;

const Box = styled.div`
  padding-bottom: 30px;
`;

export default App;
