import {
  ButtonHTMLAttributes,
  FC,
  MouseEventHandler,
  PropsWithChildren,
} from "react";

export enum BUTTON_VARIANTS {
  PRIMARY = "primary",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
}


type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: BUTTON_VARIANTS;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  disabled,
  onClick,
  variant = BUTTON_VARIANTS.PRIMARY,
  ...restProps
}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (disabled) return;
    onClick && onClick(e);
  };

  return (
    <button disabled={disabled} onClick={handleClick} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
