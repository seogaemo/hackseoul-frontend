import { styled, useTheme } from "styled-components";
import { Column, Row } from "../../components/Container";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const ProductItem = () => {
  const theme = useTheme();

  return (
    <ProductItemContent>
      <Row $fill $gap={8}>
        <Column $fill $gap={4}>
          <Typography.HeadLine color={theme.colors.Test}>
            00000000000
          </Typography.HeadLine>

          <Row $gap={6}>
            <Typography.Body color={theme.colors.Test}>
              발급일시
            </Typography.Body>

            <Typography.Body color={theme.colors.Secondary}>
              2024. 00. 00
            </Typography.Body>
          </Row>
        </Column>

        <QR src="" alt="QR" />
      </Row>

      <Row $gap={8} $fill>
        <Button $flex $variant="secondary">
          인쇄
        </Button>

        <Button $flex $variant="secondary">
          저장
        </Button>
      </Row>
    </ProductItemContent>
  );
};

const ProductItemContent = styled.div`
  display: flex;
  padding: 16px 20px 20px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.Base.border};
  background: #ffffff;
`;

const QR = styled.img`
  width: 40px;
  height: 40px;
`;

export default function ProductDetail() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <img src="" alt="" />

        <h1>Apple 정품 아이폰 15 자급제</h1>
      </Content>

      <Line />

      <Column $gap={16}>
        <Row
          style={{
            padding: "0 4px",
          }}
          $fill
          $justifyContent="space-between"
        >
          <Typography.HeadLine color={theme.colors.Test}>
            상품 유통 내역
          </Typography.HeadLine>

          <Button onClick={() => navigate("/company/create")}>추가하기</Button>
        </Row>

        <ProductItemContainer>
          <ProductItem />
        </ProductItemContainer>
      </Column>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  overflow-y: auto;
`;

const Content = styled.div`
  display: flex;
  min-width: 320px;
  padding: 20px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.Base.border};
  background: #ffffff;

  img {
    width: 128px;
    height: 128px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.Test};
    font-size: 28px;
    font-weight: 600;
    line-height: 42px; /* 150% */
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.Base.border};
`;

const ProductItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  overflow-y: auto;
`;
