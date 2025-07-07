'use client';
import React from 'react';
import styles from './button.module.css'; // button.module.css 임포트

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary'; // 버튼 variant 추가
}

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  // variant에 따라 클래스 이름을 동적으로 조합합니다.
  const buttonClass = `${className || ''} ${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}