import styled from "styled-components";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Container>
      <Header />

      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;

  padding: 0 128px;
`;
