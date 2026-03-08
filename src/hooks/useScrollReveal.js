import React, { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // For a cleaner feel, we unobserve after the first reveal
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Initial check for elements already in viewport
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    revealElements.forEach((el) => observer.observe(el));

    // Re-check when elements might be added or changed (simple interval as a fallback)
    const interval = setInterval(() => {
      const currentElements = document.querySelectorAll('.reveal:not(.active), .reveal-stagger:not(.active)');
      currentElements.forEach(el => observer.observe(el));
    }, 2000);

    return () => {
      clearInterval(interval);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useScrollReveal;
