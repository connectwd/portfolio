import React, { JSX } from 'react';
import Link from 'next/link';
interface ButtonProps {
  variant: 'primary-button' | 'primary-link' | 'secondary-button' | 'secondary-link';
  text: string;
  href?: string; // Only needed for link variants
  icon? // Only needed for link variants
  onClick?: () => void; // Only needed for button variants
  styles?: string
}

const Button: React.FC<ButtonProps> = ({ variant, text, href, icon: Icon, onClick, styles }) => {
  const baseStyles = 'py-2 px-6 rounded text-center flex flex-row items-center gap-2';
  const primaryStyles = 'bg-blue-800 shadow-inner-glow text-white hover:bg-blue-600';
  const secondaryStyles = 'border border-blue-600 shadow-inner-glow hover:bg-blue-200/20';

  if (variant === 'primary-button' || variant === 'secondary-button') {
    const buttonStyles = variant === 'primary-button' ? primaryStyles : secondaryStyles;
    return (
      <button className={`${baseStyles} ${buttonStyles} ${styles}`} onClick={onClick}>
        {text}
      </button>
    );
  }

  if (variant === 'primary-link' || variant === 'secondary-link') {
    const linkStyles = variant === 'primary-link' ? primaryStyles : secondaryStyles;
    return (
      <Link href={href || '#'} className={`${baseStyles} ${linkStyles} ${styles}`}>
        {text}
        {Icon && <Icon/>}
      </Link>
    );
  }

  return null;
};

export default Button;