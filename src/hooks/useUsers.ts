// useUsers.ts — custom hook quản lý danh sách người dùng

import { useState, useEffect } from 'react';
import type { User, LoadingState } from '../types';
import { fetchUsers } from '../services/userService';

interface UseUsersResult {
    users: User[];
    loading: LoadingState;
    error: string | null;
    refetch: () => void;
}

export function useUsers(): UseUsersResult {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<LoadingState>('idle');
    const [error, setError] = useState<string | null>(null);

    const load = async () => {
        setLoading('loading');
        setError(null);
        try {
            const data = await fetchUsers();
            setUsers(data);
            setLoading('success');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Lỗi không xác định');
            setLoading('error');
        }
    };

    useEffect(() => {
        load();
    }, []);

    return { users, loading, error, refetch: load };
}
