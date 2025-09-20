import React, { useState, useEffect } from 'react';
import './MedicalRecord.css';

const MedicalRecord = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    originState: '',
    occupation: '',
    symptoms: '',
    vaccinationStatus: '',
    otherIssues: ''
  });

  const [allRecords, setAllRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch all medical records on component mount
  useEffect(() => {
    fetchAllRecords();
  }, []);

  const fetchAllRecords = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/medical-records');
      if (response.ok) {
        const data = await response.json();
        setAllRecords(data);
      }
    } catch (error) {
      console.error('Error fetching medical records:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/medical-record', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Medical record saved successfully!');
        setFormData({
          name: '',
          age: '',
          gender: '',
          originState: '',
          occupation: '',
          symptoms: '',
          vaccinationStatus: '',
          otherIssues: ''
        });
        // Refresh the records list
        fetchAllRecords();
      } else {
        setMessage('Error saving medical record. Please try again.');
      }
    } catch (error) {
      console.error('Error saving medical record:', error);
      setMessage('Error saving medical record. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="medical-record-container">
      <div className="medical-record-header">
        <h1>Medical Record</h1>
        <p>Enter patient details for migrant worker healthcare records</p>
      </div>

      <div className="medical-record-content">
        {/* Form Section */}
        <div className="form-section">
          <h2>Patient Information Form</h2>
          <form onSubmit={handleSubmit} className="medical-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="gender">Gender *</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="originState">Origin State *</label>
                <input
                  type="text"
                  id="originState"
                  name="originState"
                  value={formData.originState}
                  onChange={handleInputChange}
                  placeholder="e.g., Uttar Pradesh, Bihar"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="occupation">Occupation *</label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  placeholder="e.g., Construction Worker, Farm Laborer"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="vaccinationStatus">Vaccination Status</label>
                <select
                  id="vaccinationStatus"
                  name="vaccinationStatus"
                  value={formData.vaccinationStatus}
                  onChange={handleInputChange}
                >
                  <option value="">Select Status</option>
                  <option value="Fully Vaccinated">Fully Vaccinated</option>
                  <option value="Partially Vaccinated">Partially Vaccinated</option>
                  <option value="Not Vaccinated">Not Vaccinated</option>
                  <option value="Unknown">Unknown</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="symptoms">Symptoms *</label>
              <textarea
                id="symptoms"
                name="symptoms"
                value={formData.symptoms}
                onChange={handleInputChange}
                placeholder="Describe current symptoms and health issues"
                required
                rows="3"
              />
            </div>

            <div className="form-group">
              <label htmlFor="otherIssues">Other Issues</label>
              <textarea
                id="otherIssues"
                name="otherIssues"
                value={formData.otherIssues}
                onChange={handleInputChange}
                placeholder="Any other health concerns or notes"
                rows="2"
              />
            </div>

            {message && (
              <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
                {message}
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Saving...' : 'Save Medical Record'}
            </button>
          </form>
        </div>

        {/* Past Records Section */}
        <div className="records-section">
          <h2>Past Records</h2>
          {allRecords.length > 0 ? (
            <div className="records-list">
              {allRecords.map((record, index) => (
                <div key={record._id || index} className="record-strip">
                  <div className="record-content">
                    <div className="record-name">
                      <strong>{record.name}</strong>
                    </div>
                    <div className="record-details-grid">
                      <div className="record-detail">
                        <span className="detail-label">Age:</span>
                        <span className="detail-value">{record.age} years</span>
                      </div>
                      <div className="record-detail">
                        <span className="detail-label">Gender:</span>
                        <span className="detail-value">{record.gender}</span>
                      </div>
                      <div className="record-detail">
                        <span className="detail-label">Origin State:</span>
                        <span className="detail-value">{record.originState}</span>
                      </div>
                      <div className="record-detail">
                        <span className="detail-label">Occupation:</span>
                        <span className="detail-value">{record.occupation}</span>
                      </div>
                      <div className="record-detail">
                        <span className="detail-label">Vaccination:</span>
                        <span className="detail-value">{record.vaccinationStatus || 'Not specified'}</span>
                      </div>
                      <div className="record-detail">
                        <span className="detail-label">Symptoms:</span>
                        <span className="detail-value">{record.symptoms}</span>
                      </div>
                      {record.otherIssues && (
                        <div className="record-detail">
                          <span className="detail-label">Other Issues:</span>
                          <span className="detail-value">{record.otherIssues}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="record-datetime">
                    {new Date(record.createdAt).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-records">
              <p>No medical records found. Please create a new record above.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalRecord;
