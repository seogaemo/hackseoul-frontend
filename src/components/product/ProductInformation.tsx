import { styled, useTheme } from "styled-components";
import { Column } from "../Container";
import Typography from "../Typography";

export default function ProductInformation() {
  const theme = useTheme();

  return (
    <Container>
      <img src="" alt="" />

      <Column
        style={{
          height: "100%",
        }}
        $justifyContent="space-between"
      >
        <Typography.HeadLine color={theme.colors.Test}>
          상품명
        </Typography.HeadLine>

        <a href="/product/detail/123">
          <Typography.Body underline color={theme.colors.Secondary}>
            상세보기 →
          </Typography.Body>
        </a>
      </Column>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-width: 320px;
  padding: 20px;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.Base.border};
  background: #ffffff;

  img {
    width: 128px;
    height: 128px;
  }
`;
