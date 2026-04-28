import React from 'react';

function Studentlist({ students }) {
    return (
        <div className="container animate-fade-in">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Student Directory</h2>
            
            {students.length === 0 ? (
                <div className="glass-panel empty-state">
                    <p>No students have been added yet.</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Navigate to "Add Student" to create a new record.</p>
                </div>
            ) : (
                <div className="student-grid">
                    {students.map((student, index) => (
                        <div key={index} className="glass-panel student-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{ 
                                    width: '40px', 
                                    height: '40px', 
                                    borderRadius: '50%', 
                                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem'
                                }}>
                                    {student.name.charAt(0).toUpperCase()}
                                </div>
                                <h3>{student.name}</h3>
                            </div>
                            
                            <div className="student-info">
                                <div className="info-row">
                                    <span className="info-label">Age</span>
                                    <span className="info-value">{student.age}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Course</span>
                                    <span className="info-value" style={{ 
                                        background: 'rgba(99, 102, 241, 0.2)', 
                                        padding: '0.2rem 0.8rem', 
                                        borderRadius: '12px',
                                        fontSize: '0.85rem'
                                    }}>
                                        {student.course}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Studentlist;