import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2, Eye, ShieldCheck, ArrowUpRight } from 'lucide-react';

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
            {/* Primary Download Button (Desktop header) */}
            <a
              href={resumeUrl}
              download="Harsh_Kumar_Gupta_Resume.pdf"
              className="modal-btn-download desktop-btn-only"
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

        {/* Dedicated Mobile Fast-Action Banner (Always visible on Mobile) */}
        <div className="modal-mobile-action-card">
          <div className="mobile-action-text">
            <span className="mobile-action-lead">Harsh Kumar Gupta — Resume</span>
            <span className="mobile-action-sub">Data Engineer • AWS &amp; GCP • Spark Streaming</span>
          </div>
          <div className="mobile-action-btns-row">
            <a 
              href={resumeUrl} 
              download="Harsh_Kumar_Gupta_Resume.pdf" 
              className="mobile-action-btn primary"
              aria-label="Download Harsh Kumar Gupta Resume PDF"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mobile-action-btn secondary"
              aria-label="Open Resume in new browser tab"
            >
              <ExternalLink size={15} />
              <span>Open in Tab</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer with Fallback for both PC and Mobile */}
        <div className="resume-modal-body">
          <object
            data={`${resumeUrl}#view=FitH&toolbar=0&navpanes=0`}
            type="application/pdf"
            className="resume-modal-pdf-object"
            aria-label="Harsh Kumar Gupta Resume PDF"
          >
            {/* Fallback for browsers / devices without native PDF viewer */}
            <div className="modal-iframe-fallback">
              <FileText size={42} color="var(--cyan-stream)" />
              <div className="fallback-text-block">
                <p className="fallback-title">Harsh Kumar Gupta — Resume PDF</p>
                <p className="fallback-text">
                  Your device browser does not display embedded PDFs inline. You can view or download the complete document below:
                </p>
              </div>
              <div className="fallback-buttons-group">
                <a
                  href={resumeUrl}
                  download="Harsh_Kumar_Gupta_Resume.pdf"
                  className="modal-btn-download"
                >
                  <Download size={15} />
                  <span>Download Resume PDF</span>
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn-action"
                >
                  <ExternalLink size={15} />
                  <span>Open in Full Browser Tab</span>
                </a>
              </div>
            </div>
          </object>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
