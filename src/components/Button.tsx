import { PropsWithChildren } from "react";
import styled from "styled-components";
import Typography from "./Typography";

interface Props extends PropsWithChildren {
  $fill?: boolean;
  $flex?: boolean;
  $variant?: "primary" | "secondary" | "unable";
  onClick?: () => void;
}

export default function Button({
  children,
  $fill,
  $flex,
  $variant,
  onClick,
}: Props) {
  return (
    <Container
      onClick={onClick}
      type={
        $variant === "unable" || $variant === "secondary" ? "button" : "submit"
      }
      disabled={$variant === "unable"}
      $fill={$fill}
      $variant={$variant}
      style={{ flex: $flex ? "1 0 0" : "" }}
    >
      <Typography.Body
        color={
          $variant === "primary" || !$variant
            ? "#ffffff"
            : $variant === "secondary"
            ? "#000000"
            : "#C4CDD5"
        }
      >
        {children}
      </Typography.Body>
    </Container>
  );
}

const Container = styled.button<{
  $fill?: boolean;
  $variant?: "primary" | "secondary" | "unable";
}>`
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  height: 44px;
  gap: 8px;
  border-radius: 4px;

  width: ${({ $fill }) => ($fill ? "100%" : "auto")};

  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === "primary" || !$variant
        ? theme.colors.Accent.default
        : theme.colors.Base.border};

  background-color: ${({ theme, $variant }) =>
    $variant === "primary" || !$variant
      ? theme.colors.Accent.default
      : "#ffffff"};
`;
