// Spinner.tsx — hiệu ứng loading vòng tròn
// Dùng khi LoadingState === 'loading'

function Spinner() {
    return (
        <div
            role="status"
            aria-label="Đang tải..."
            style={{
                display: 'inline-block',
                width: '2rem',
                height: '2rem',
                border: '3px solid #e5e7eb',
                borderTopColor: '#2563eb',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
            }}
        >
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}

export default Spinner;
