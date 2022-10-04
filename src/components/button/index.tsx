import { ButtonProps } from "./types";
import StyledButton from "./styles";

function Button({ name, ...rest }: ButtonProps) {
  return <StyledButton {...rest}> {name} </StyledButton>;
}

export default Button;
