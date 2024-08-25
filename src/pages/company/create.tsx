import { styled, useTheme } from "styled-components";
import Input from "../../components/Input";
import { useEffect, useState } from "react";
import { Row } from "../../components/Container";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Typography from "../../components/Typography";
import CreateCompanyModal from "../../components/modal/CreateCompanyModal";

export default function CompanyCreate() {
  const [modelNumber, setModelNumber] = useState<string>("");
  const [createdDate, setCreatedDate] = useState<string>("");

  const [date, setDate] = useState<string>("");

  const [companyId, setCompanyId] = useState<string>("");

  useEffect(() => {
    if (companyId === "new") {
      setIsModalOpen(true);
    }
  }, [companyId]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
      <Container>
        <form>
          <h1>상품 유통 내역 등록</h1>
          <Input
            label="모델 번호"
            placeholder="모델 번호를 입력하세요.."
            state={[modelNumber, setModelNumber]}
          />

          <Input
            label="생산 일자"
            placeholder="생산 일자를 입력하세요.."
            state={[createdDate, setCreatedDate]}
          />

          <Line />

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
            <select
              value={companyId}
              onChange={(e) => setCompanyId(e.target.value)}
            >
              <option value="">-</option>
              <option value="new">새 업체 추가</option>
            </select>

            <Input
              isLabel={false}
              placeholder="기간을 입력해주세요.."
              type="date"
              state={[date, setDate]}
            />
          </InputContainer>

          <Row $justifyContent="flex-end" $gap={8} $fill>
            <Button onClick={() => navigate("/")} $variant="secondary">
              취소
            </Button>
            <Button>등록</Button>
          </Row>
        </form>
      </Container>

      {isModalOpen && (
        <CreateCompanyModal
          onClose={() => {
            setIsModalOpen(false);
            setCompanyId("");
          }}
        />
      )}
    </>
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

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.Base.border};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  select {
    display: flex;
    padding: 12px;
    min-height: 44px;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.Base.border};
    background: #ffffff;
  }
`;
