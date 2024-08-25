import { useState } from "react";
import styled, { useTheme } from "styled-components";
import Input from "../../components/Input";
import { Row } from "../../components/Container";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Typography from "../../components/Typography";

export default function ProductCreate() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");

  return (
    <Container>
      <form>
        <h1>상품 정보</h1>

        <InputContainer>
          <div
            style={{
              padding: "0 4px",
            }}
          >
            <Typography.Caption color={theme.colors.Quaternary}>
              유통 업체
            </Typography.Caption>
          </div>

          <Input
            isLabel={false}
            placeholder="기간을 입력해주세요.."
            type="file"
            state={[image, setImage]}
            // 우석아 파일 업로드 구현해
          />
        </InputContainer>

        <Input
          label="제품 이름"
          placeholder="제품 이름을 입력하세요.."
          state={[name, setName]}
        />

        <Row $justifyContent="flex-end" $gap={8}>
          <Button onClick={() => navigate("/")} $variant="secondary">
            취소
          </Button>
          <Button>등록</Button>
        </Row>
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  form {
    padding: 32px 0;

    width: 100%;
    max-width: 480px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    h1 {
      color: ${({ theme }) => theme.colors.Test};
      font-size: 28px;
      font-weight: 600;
      line-height: 42px;
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
