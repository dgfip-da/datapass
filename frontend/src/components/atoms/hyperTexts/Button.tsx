import React, { MouseEvent } from 'react';
import HyperText, { ButtonType } from './HyperText';

type Props = {
  href?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  outline?: boolean;
  large?: boolean;
  xLarge?: boolean;
  type?: ButtonType;
  icon?: string;
  iconRight?: boolean;
  className?: string;
  submit?: boolean;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  href,
  onClick,
  outline = false,
  large = false,
  xLarge = false,
  type,
  icon,
  iconRight = false,
  children,
  className = '',
  submit = false,
  ...props
}) => {
  className += ' fr-btn';

  if (!large && !xLarge) {
    className += ' fr-btn--sm';
  }

  if (xLarge) {
    className += ' fr-btn--lg';
  }

  if (outline) {
    className += ' fr-btn--secondary';
  }

  if (submit) {
    return (
      <button type="submit" className={className} {...props}>
        {children}
      </button>
    );
  }

  return (
    <HyperText
      type={type}
      icon={icon}
      iconRight={iconRight}
      onClick={onClick}
      href={href}
      children={children}
      className={className}
      {...props}
    />
  );
};

export default Button;
