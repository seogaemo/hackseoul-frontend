import { PropsWithChildren } from "react";
import styled from "styled-components";
import Typography from "./Typography";

export default function Button({ children }: PropsWithChildren) {
  return (
    <Container>
      <Typography.Body color={"#ffffff"}>{children}</Typography.Body>
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  height: 44px;
  gap: 8px;
  align-self: stretch;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.Accent.default};
`;
