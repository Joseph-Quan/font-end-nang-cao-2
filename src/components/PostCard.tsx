// PostCard.tsx — thẻ hiển thị một bài viết
// Buổi 2: dữ liệu hardcode → Buổi 5 sẽ nhận qua props → Buổi 17 lấy từ API

import type { Post } from '../types';
import Badge from './ui/Badge';

interface PostCardProps {
    post?: Post; // optional: nếu không truyền thì dùng dữ liệu mẫu
}

// Dữ liệu mẫu dùng khi không có props (demo buổi 2)
const SAMPLE_POST: Post = {
    id: 0,
    title: 'Giới thiệu React: Tại sao không dùng Vanilla JS?',
    excerpt:
        'React giải quyết bài toán đồng bộ giao diện với dữ liệu bằng cách ' +
        'mô tả giao diện theo trạng thái, thay vì thao tác DOM thủ công.',
    content: '',
    authorId: 1,
    publishedAt: '2025-09-01',
    tags: ['React', 'JavaScript', 'Frontend'],
};

function PostCard({ post = SAMPLE_POST }: PostCardProps) {
    return (
        <article
            style={{
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '1.25rem',
                backgroundColor: '#fff',
            }}
        >
            {/* Tiêu đề bài viết */}
            <h3 style={{ marginTop: 0 }}>{post.title}</h3>

            {/* Tags */}
            <div style={{ marginBottom: '0.5rem' }}>
                {post.tags.map((tag) => (
                    <Badge key={tag} label={tag} />
                ))}
            </div>

            {/* Thông tin meta */}
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                📅 {post.publishedAt}
            </p>

            {/* Tóm tắt nội dung */}
            <p>{post.excerpt}</p>

            {/* Nút hành động — chưa có chức năng, thêm ở Buổi 7 (sự kiện) */}
            <button
                style={{
                    padding: '0.4rem 1rem',
                    backgroundColor: '#2563eb',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                }}
            >
                Đọc tiếp →
            </button>
        </article>
    );
}

export default PostCard;
