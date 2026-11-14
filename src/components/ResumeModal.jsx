import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  const resumeUrl = `${import.meta.env.BASE_URL}resume/resume.pdf`;

  useEffect(() => {
    if (!isOpen) return;

    // Lock background scroll when modal is open
    const prevOverflow = document.body.style.overflow;
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
                READY FOR DOWNLOAD &amp; REVIEW
              </span>
            </div>
          </div>

          <div className="modal-actions-group">
            {/* Download Button inside the Pop-up */}
            <a
              href={resumeUrl}
              download="Harsh_Kumar_Gupta_Resume.pdf"
              className="modal-btn-download"
              title="Download Resume PDF to your device"
              aria-label="Download Resume PDF"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            {/* Open in Separate Tab */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn-action"
              title="Open Resume in a new browser tab"
              aria-label="Open Resume in a new tab"
            >
              <ExternalLink size={15} />
              <span className="desktop-text-only">Open Tab</span>
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

        {/* Mobile quick actions strip (visible on small screens) */}
        <div className="modal-mobile-quickbar">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="mobile-bar-action">
            <ExternalLink size={14} /> Open Full Document
          </a>
          <a href={resumeUrl} download="Harsh_Kumar_Gupta_Resume.pdf" className="mobile-bar-action primary">
            <Download size={14} /> Download PDF
          </a>
        </div>

        {/* Embedded PDF Document Body */}
        <div className="resume-modal-body">
          <iframe
            src={`${resumeUrl}#view=FitH&toolbar=0`}
            title="Harsh Kumar Gupta Resume PDF Preview"
            className="resume-modal-iframe"
          />

          <div className="modal-iframe-fallback">
            <p>Viewing PDF directly in your browser?</p>
            <a
              href={resumeUrl}
              download="Harsh_Kumar_Gupta_Resume.pdf"
              className="cta-btn-primary"
            >
              <Download size={15} />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
