import { styled, useTheme } from "styled-components";
import Typography from "../Typography";
import { useState } from "react";
import Input from "../Input";
import { Row } from "../Container";
import Button from "../Button";

interface Props {
  onClose: () => void;
}

export default function CreateCompanyModal(props: Props) {
  const theme = useTheme();

  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [licenseNumber, setLicenseNumber] = useState<string>("");
  const [businessNumber, setBusinessNumber] = useState<string>("");

  return (
    <>
      <Background onClick={props.onClose} />
      <Container>
        <Typography.HeadLine color={theme.colors.Test}>
          업체 등록하기
        </Typography.HeadLine>

        <Input
          label="전화번호"
          placeholder="전화번호를 입력하세요.."
          state={[phone, setPhone]}
        />

        <Input
          label="이메일"
          placeholder="이메일를 입력하세요.."
          state={[email, setEmail]}
        />

        <Input
          label="사업장소재지"
          placeholder="사업장소재지를 입력하세요.."
          state={[address, setAddress]}
        />

        <Input
          label="통신판매 신고번호"
          placeholder="통신판매 신고번호를 입력하세요.."
          state={[licenseNumber, setLicenseNumber]}
        />

        <Input
          label="사업자등록번호"
          placeholder="사업자등록번호를 입력하세요.."
          state={[businessNumber, setBusinessNumber]}
        />

        <Row $justifyContent="flex-end" $gap={8} $fill>
          <Button $variant="secondary" onClick={props.onClose}>
            취소
          </Button>
          <Button>등록</Button>
        </Row>
      </Container>
    </>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);

  z-index: 99;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  width: 90%;
  max-width: 480px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #fff;

  z-index: 100;
`;
