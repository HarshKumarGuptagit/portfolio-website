import React, { useEffect } from 'react';
import { X, Download, FileText, CheckCircle2 } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  const resumeUrl = `${import.meta.env.BASE_URL}resume/resume.pdf`;

  useEffect(() => {
    if (!isOpen) return;

    // Lock background scroll when modal is open
    const prevOverflow = document.body.style.overflow;
    const prevPosition = document.body.style.position;
    const prevWidth = document.body.style.width;

    document.body.style.overflow = 'hidden';

    // Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.position = prevPosition;
      document.body.style.width = prevWidth;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="resume-modal-overlay" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div 
        className="resume-modal-window" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="resume-modal-header">
          <div className="modal-title-group">
            <div className="modal-file-icon">
              <FileText size={18} color="var(--cyan-stream)" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="modal-filename">
                Harsh_Kumar_Gupta_Resume.pdf
              </h2>
              <span className="modal-status-badge">
                <CheckCircle2 size={12} />
                <span>UPDATED • READY FOR REVIEW</span>
              </span>
            </div>
          </div>

          <div className="modal-actions-group">
            {/* The ONLY Download Resume Button (PC & Mobile) */}
            <a
              href={resumeUrl}
              download="Harsh_Kumar_Gupta_Resume.pdf"
              className="modal-btn-download"
              title="Download Harsh Kumar Gupta Resume PDF"
              aria-label="Download Harsh Kumar Gupta Resume PDF"
            >
              <Download size={15} />
              <span className="download-text-desktop">Download Resume</span>
              <span className="download-text-mobile">Download</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="modal-btn-close"
              title="Close Resume (Esc)"
              aria-label="Close Resume Modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer for both PC and Mobile (Clean view with no center button) */}
        <div className="resume-modal-body">
          <iframe
            src={`${resumeUrl}#view=FitH&toolbar=0&navpanes=0`}
            title="Harsh Kumar Gupta Resume PDF Preview"
            className="resume-modal-iframe"
          />
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
