import React from "react";

function Home() {
    return (
        <div className="container animate-fade-in" style={{ textAlign: 'center', marginTop: '10vh' }}>
            <div className="glass-panel" style={{ padding: '4rem 2rem', display: 'inline-block' }}>
                <h1>Student Management System</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Welcome to the modern platform for managing student records. 
                    Navigate through the menu to view or add new students to the system.
                </p>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <div className="glass-panel" style={{ padding: '1.5rem', width: '150px' }}>
                        <h2 style={{ marginBottom: '0.5rem', background: 'linear-gradient(to right, #60a5fa, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Secure</h2>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Safe data handling</p>
                    </div>
                    <div className="glass-panel" style={{ padding: '1.5rem', width: '150px' }}>
                        <h2 style={{ marginBottom: '0.5rem', background: 'linear-gradient(to right, #34d399, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Fast</h2>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Quick operations</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;