import styled from "styled-components";
import { Column } from "../components/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import Input from "../components/Input";
import { useState } from "react";
import { useLogin } from "../hooks/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { mutate } = useLogin();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <form
        onSubmit={() => {
          mutate({ id, password });

          navigate("/");
        }}
      >
        <img src="/coupang_logo.png" alt="coupang logo" />

        <Input
          label="아이디"
          placeholder="아이디를 입력하세요.."
          state={[id, setId]}
        />

        <Input
          label="비밀번호"
          placeholder="비밀번호를 입력하세요.."
          state={[password, setPassword]}
        />

        <Column $fill $gap={4} $alignItems="center">
          <Button>로그인</Button>

          <a href="">
            <Typography.Body underline color={"#111111"}>
              회원가입
            </Typography.Body>
          </a>
        </Column>
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.Base.default};

  form {
    display: flex;
    width: 90%;
    max-width: 400px;
    padding: 32px 24px 24px 24px;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.colors.Base.border};
    background: ${({ theme }) => theme.colors.Base.elevated};

    img {
      height: 40px;
    }
  }
`;
