import { styled } from "styled-components";
import ProductInformation from "../components/product/ProductInformation";

export default function Index() {
  return (
    <Container>
      <ProductInformation />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  overflow-y: auto;
`;
