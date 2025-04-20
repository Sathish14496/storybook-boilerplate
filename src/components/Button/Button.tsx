import React from 'react';
import './Button.scss';

// Test comment for pre-commit hooks
export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Is button disabled?
   */
  disabled?: boolean;
}

export const Button = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button button--${variant} button--${size} ${disabled ? 'button--disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
