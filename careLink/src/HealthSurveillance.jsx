import React, { useState } from 'react';
import './HealthSurveillance.css';

const HealthSurveillance = () => {
  const [healthReport, setHealthReport] = useState(null);
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateHealthReport = async () => {
    setLoading(true);
    setError('');
    setHealthReport(null);
    setPatientData(null);

    try {
      const response = await fetch('http://localhost:5000/api/health-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setHealthReport(data.report);
        setPatientData(data.patientData);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to generate health report');
      }
    } catch (error) {
      console.error('Error generating health report:', error);
      setError('Error connecting to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="health-surveillance-container">
      <div className="health-surveillance-header">
        <h1>Health Surveillance</h1>
        <p>AI-powered predictive health analysis for migrant workers</p>
      </div>

      <div className="health-surveillance-content">
        <div className="report-generation-section">
          <div className="generation-card">
            <h2>Generate Health Report</h2>
            <p>
              Generate an AI-powered health surveillance report based on the latest medical record.
              The report will include predictive analysis, recommended tests, and preventive actions.
            </p>
            
            <button 
              onClick={generateHealthReport} 
              className="generate-btn"
              disabled={loading}
            >
              {loading ? 'Generating Report...' : 'Generate Health Report'}
            </button>
          </div>
        </div>

        {error && (
          <div className="error-message">
            <h3>⚠️ Error</h3>
            <p>{error}</p>
          </div>
        )}

        {patientData && (
          <div className="patient-data-section">
            <h2>Patient Information</h2>
            <div className="patient-data-card">
              <div className="patient-header">
                <h3>{patientData.name}</h3>
                <span className="patient-age">{patientData.age} years old</span>
              </div>
              <div className="patient-details">
                <div className="detail-row">
                  <span className="detail-label">Gender:</span>
                  <span className="detail-value">{patientData.gender}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Origin State:</span>
                  <span className="detail-value">{patientData.originState}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Occupation:</span>
                  <span className="detail-value">{patientData.occupation}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Symptoms:</span>
                  <span className="detail-value">{patientData.symptoms}</span>
                </div>
                {patientData.vaccinationStatus && (
                  <div className="detail-row">
                    <span className="detail-label">Vaccination:</span>
                    <span className="detail-value">{patientData.vaccinationStatus}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {healthReport && (
          <div className="health-report-section">
            <h2>AI Health Surveillance Report</h2>
            <div className="health-report-card">
              <div className="report-header">
                <h3>Predictive Analysis</h3>
                <span className="report-timestamp">
                  Generated: {new Date().toLocaleString()}
                </span>
              </div>
              <div className="report-content">
                <div className="report-text">
                  {healthReport.split('\n').map((line, index) => (
                    <p key={index} className="report-paragraph">
                      {line.trim()}
                    </p>
                  ))}
                </div>
              </div>
              <div className="report-footer">
                <div className="ai-badge">
                  <span className="ai-icon">🤖</span>
                  <span>Powered by Google Gemini AI</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {!patientData && !healthReport && !loading && !error && (
          <div className="empty-state">
            <div className="empty-icon">📊</div>
            <h3>Ready to Generate Report</h3>
            <p>
              Click the "Generate Health Report" button above to create an AI-powered 
              health surveillance report based on the latest medical record.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthSurveillance;
