interface TypographyProps {
  children?: React.ReactNode;
  color: string;
  bold?: boolean;
  underline?: boolean;
}

const Text = (
  props: TypographyProps & {
    size: number;
  }
) => {
  return (
    <p
      style={{
        color: props.color,
        fontWeight: props.bold ? 600 : 500,
        fontSize: props.size,
        textDecoration: props.underline ? "underline" : "normal",
      }}
    >
      {props.children}
    </p>
  );
};

const Caption = (props: TypographyProps) => {
  return <Text {...props} size={13} />;
};

const Body = (props: TypographyProps) => {
  return <Text {...props} size={15} />;
};

const Heading = (props: TypographyProps) => {
  return <Text {...props} size={17} />;
};

const HeadLine = (props: TypographyProps) => {
  return <Text {...props} size={18} />;
};

const Typography = {
  Caption,
  Body,
  Heading,
  HeadLine,
};

export default Typography;
