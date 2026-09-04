// MainLayout.tsx — bố cục trang chính: Header + nội dung + Footer
// Dùng children pattern để bao bọc các trang khác nhau

import type { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface MainLayoutProps {
    children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1, padding: '1.5rem 2rem' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;
