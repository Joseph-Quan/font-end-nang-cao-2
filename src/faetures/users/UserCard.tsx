// UserCard.tsx — thẻ hiển thị thông tin một người dùng

import type { User } from '../../types';

interface UserCardProps {
    user: User;
}

function UserCard({ user }: UserCardProps) {
    return (
        <div
            style={{
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
            }}
        >
            {user.avatarUrl ? (
                <img
                    src={user.avatarUrl}
                    alt={user.name}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                />
            ) : (
                <div
                    style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: '#dbeafe',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        color: '#2563eb',
                        fontSize: '1.2rem',
                    }}
                >
                    {user.name.charAt(0).toUpperCase()}
                </div>
            )}
            <div>
                <p style={{ margin: 0, fontWeight: 600 }}>{user.name}</p>
                <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>{user.email}</p>
            </div>
        </div>
    );
}

export default UserCard;
