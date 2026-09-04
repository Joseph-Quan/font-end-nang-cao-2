// PostList.tsx — danh sách bài viết (feature component)
// Dùng hook usePosts để lấy dữ liệu, hiển thị danh sách PostCard

import { usePosts } from '../../hooks/usePosts';
import PostCard from '../../components/PostCard';
import Spinner from '../../components/ui/Spinner';

function PostList() {
    const { posts, loading, error, refetch } = usePosts();

    if (loading === 'loading') {
        return (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
                <Spinner />
                <p>Đang tải bài viết...</p>
            </div>
        );
    }

    if (loading === 'error') {
        return (
            <div style={{ color: '#dc2626', padding: '1rem' }}>
                <p>⚠️ Lỗi: {error}</p>
                <button onClick={refetch}>Thử lại</button>
            </div>
        );
    }

    if (posts.length === 0) {
        return <p>Chưa có bài viết nào.</p>;
    }

    return (
        <section>
            <h2>Danh sách bài viết ({posts.length})</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}

export default PostList;
