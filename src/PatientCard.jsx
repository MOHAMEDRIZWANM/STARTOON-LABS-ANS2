import React from "react";
import "./PatientCard.css";

const PatientCard = () => {
    return (
        <div className="patient-card">
            <div className="view-patient">
                <i className="fas fa-arrow-left"></i>
                <span>View patient</span>
            </div>
            <div className="patient-header">
                <div className="patient-details">
                    <h2 className="patient-name">S.Meena, F/23</h2>
                    <p className="patient-id">Patient ID : 87 20200727153457</p>
                </div>
                <div className="patient-avatar">
                    <i className="fas fa-user"></i>
                </div>
            </div>
            <div className="goal-section">
                <p className="goal-title">Goal reached</p>
                <div className="goal-progress">
                    <div className="progress-circle">
                        <span className="progress-percentage">40%</span>
                    </div>
                </div>
                <div className="goal-metrics">
                    <div className="metric">
                        {/* EMG */}
                        <div className="metric-box emg"></div>
                        <p className="metric-label">EMG</p>
                    </div>
                    <div className="metric">
                        {/* ROM */}
                        <div className="metric-box rom"></div>
                        <p className="metric-label">ROM</p>
                    </div>
                </div>
            </div>
            <div className="patient-info">
                <p><strong>Phone no </strong><i className="fas fa-phone-alt"></i>8022334455</p>
                <p><strong>Mail ID </strong><i className="fas fa-envelope"></i> meenarabinsachin2@gmail.com</p>
                <p><strong>Affected side </strong> <i className="fas fa-venus-mars"></i> Bilateral</p>
                <p><strong>Condition </strong> <i className="fas fa-heart"></i> Ortho</p>
                <p><strong>Speciality </strong> <i className="fas fa-stethoscope"></i> Osteoarthritis</p>
            </div>
            <div className="medical-history">
                <p><i className="fas fa-notes-medical"></i> <strong>Medical history</strong></p>
                <p>Hypertension, DM, Hypothyroidism</p>
            </div>
        </div>
    );
};

export default PatientCard;
