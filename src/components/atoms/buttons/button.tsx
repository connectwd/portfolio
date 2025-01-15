import React, { JSX } from 'react';
import Link from 'next/link';
interface ButtonProps {
  variant: 'primary-button' | 'primary-link' | 'secondary-button' | 'secondary-link';
  text: string;
  href?: string; // Only needed for link variants
  icon? // Only needed for link variants
}

const Button: React.FC<ButtonProps> = ({ variant, text, href, icon: Icon }) => {
  const baseStyles = 'py-2 px-6 rounded text-center flex flex-row items-center gap-2';
  const primaryStyles = 'bg-blue-500 text-white hover:bg-blue-600';
  const secondaryStyles = 'border border-blue-500 text-blue-500 hover:bg-blue-100';

  if (variant === 'primary-button' || variant === 'secondary-button') {
    const buttonStyles = variant === 'primary-button' ? primaryStyles : secondaryStyles;
    return (
      <button className={`${baseStyles} ${buttonStyles}`}>
        {text}
      </button>
    );
  }

  if (variant === 'primary-link' || variant === 'secondary-link') {
    const linkStyles = variant === 'primary-link' ? primaryStyles : secondaryStyles;
    return (
      <Link href={href || '#'} className={`${baseStyles} ${linkStyles}`}>
        {text}
        {Icon && <Icon/>}
      </Link>
    );
  }

  return null;
};

export default Button;