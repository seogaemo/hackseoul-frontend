import styled, { useTheme } from "styled-components";
import { Column } from "./Container";
import Typography from "./Typography";

interface Props {
  label: string;
  placeholder: string;
  state: [string, (value: string) => void];
}

export default function Input(props: Props) {
  const theme = useTheme();

  const [value, setValue] = props.state;

  return (
    <Column $gap={4} $fill>
      <div style={{ padding: "0 4px" }}>
        <Typography.Caption color={theme.colors.Quaternary}>
          {props.label}
        </Typography.Caption>
      </div>

      <InputWrapper>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={props.placeholder}
        />
      </InputWrapper>
    </Column>
  );
}

const InputWrapper = styled.div`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.Base.border};

  input {
    &::placeholder {
      color: ${({ theme }) => theme.colors.Unselected};
    }

    width: 100%;

    color: ${({ theme }) => theme.colors.Test};

    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
  }
`;
