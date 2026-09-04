// Badge.tsx — nhãn tag nhỏ, dùng hiển thị tags bài viết

interface BadgeProps {
    label: string;
    color?: string;
}

function Badge({ label, color = '#dbeafe' }: BadgeProps) {
    return (
        <span
            style={{
                display: 'inline-block',
                padding: '0.2rem 0.6rem',
                borderRadius: '999px',
                backgroundColor: color,
                color: '#1e40af',
                fontSize: '0.75rem',
                fontWeight: 600,
                marginRight: '0.3rem',
            }}
        >
            {label}
        </span>
    );
}

export default Badge;
