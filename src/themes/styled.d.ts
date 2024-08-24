import "styled-components";
import { ColorTokens } from "./types/colors";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorTokens;
  }
}
