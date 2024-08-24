export interface ColorPalette {
  Gray: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;
  Red: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;
  Yellow: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;
  Green: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;
  Blue: Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;
  White: string;
  Black: string;
  Dim: {
    Default: string;
    Accent: string;
  };
}

export interface ColorTokens {
  Base: {
    default: string;
    default_hover: string;
    default_active: string;
    elevated: string;
    elevated_hover: string;
    elevated_active: string;
    border: string;
  };
  Accent: {
    default: string;
    default_hover: string;
    default_active: string;
    elevated: string;
    elevated_hover: string;
    elevated_active: string;
    border: string;
  };
  Negative: {
    default: string;
    default_hover: string;
    default_active: string;
    elevated: string;
    elevated_hover: string;
    elevated_active: string;
    border: string;
  };
  Warning: {
    default: string;
    default_hover: string;
    default_active: string;
    elevated: string;
    elevated_hover: string;
    elevated_active: string;
    border: string;
  };
  Positive: {
    default: string;
    default_hover: string;
    default_active: string;
    elevated: string;
    elevated_hover: string;
    elevated_active: string;
    border: string;
  };
  Test: string;
  Secondary: string;
  Tertiary: string;
  Quaternary: string;
  Unselected: string;
  Unable: string;
}
