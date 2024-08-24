import { styled } from "styled-components";
import { Row } from "./Container";
import plusSvg from "../assets/images/plus.svg";
import profileSvg from "../assets/images/profile.svg";

interface IconButtonProps {
  icon: string;
  onClick: () => void;
}

function IconButton(props: IconButtonProps) {
  return (
    <Button>
      <img src={props.icon} alt="" />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;

  gap: 4px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.Base.border};
  background: #ffffff;

  img {
    width: 28px;
    height: 28px;
  }
`;

export default function Header() {
  return (
    <Container>
      <img src="/coupang_logo.png" alt="coupang logo" />

      <Row $gap={4}>
        <IconButton icon={plusSvg} onClick={() => {}} />
        <IconButton icon={profileSvg} onClick={() => {}} />
      </Row>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 32px 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 24px;
  }
`;
