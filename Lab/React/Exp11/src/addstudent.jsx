import React, { useState } from 'react';

function AddStudent({ students, setStudents }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateInput = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(age) || parseInt(age) <= 0) {
      newErrors.age = 'Age must be a positive number';
    }

    if (!course.trim()) {
      newErrors.course = 'Course is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInput()) {
      setIsSubmitting(true);
      
      // Simulate network request for effect
      setTimeout(() => {
        const newStudent = {
          name: name.trim(),
          age: parseInt(age),
          course: course.trim()
        };

        setStudents([...students, newStudent]);

        // Clear form
        setName('');
        setAge('');
        setCourse('');
        setErrors({});
        setIsSubmitting(false);

        // Optional: you could add a toast notification here instead of alert
        // alert('Student added successfully!');
      }, 500);
    }
  };

  return (
    <div className="container animate-fade-in" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', padding: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Add New Student</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Enter the details below to register a new student.</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="e.g. Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              id="age"
              className="form-input"
              placeholder="e.g. 20"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            {errors.age && <span className="error-text">{errors.age}</span>}
          </div>

          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label htmlFor="course" className="form-label">Course</label>
            <input
              type="text"
              id="course"
              className="form-input"
              placeholder="e.g. Computer Science"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
            {errors.course && <span className="error-text">{errors.course}</span>}
          </div>

          <button
            type="submit"
            className="btn"
            disabled={isSubmitting}
            style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
          >
            {isSubmitting ? 'Adding...' : 'Register Student'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;