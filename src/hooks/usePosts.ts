// usePosts.ts — custom hook quản lý danh sách bài viết
// Hook = hàm React đặc biệt, tên bắt đầu bằng "use"
// Tách logic khỏi UI → component chỉ lo hiển thị

import { useState, useEffect } from 'react';
import type { Post, LoadingState } from '../types';
import { fetchPosts } from '../services/postService';

interface UsePostsResult {
    posts: Post[];
    loading: LoadingState;
    error: string | null;
    refetch: () => void;
}

export function usePosts(): UsePostsResult {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<LoadingState>('idle');
    const [error, setError] = useState<string | null>(null);

    const load = async () => {
        setLoading('loading');
        setError(null);
        try {
            const data = await fetchPosts();
            setPosts(data);
            setLoading('success');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Lỗi không xác định');
            setLoading('error');
        }
    };

    // Gọi lần đầu khi component mount
    useEffect(() => {
        load();
    }, []);

    return { posts, loading, error, refetch: load };
}
