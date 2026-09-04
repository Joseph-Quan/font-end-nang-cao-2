// Button.tsx — nút bấm tái sử dụng
// Component UI primitif — khối xây dựng nhỏ nhất

import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    children: ReactNode;
}

const styles: Record<Variant, React.CSSProperties> = {
    primary: { backgroundColor: '#2563eb', color: '#fff', border: 'none' },
    secondary: { backgroundColor: '#e5e7eb', color: '#374151', border: 'none' },
    danger: { backgroundColor: '#dc2626', color: '#fff', border: 'none' },
};

function Button({ variant = 'primary', children, style, ...props }: ButtonProps) {
    return (
        <button
            style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.9rem',
                ...styles[variant],
                ...style,
            }}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
