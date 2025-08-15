import { useEffect, useRef } from 'react';

/**
 * Custom hook for trapping focus within a modal or dialog
 * @param {boolean} isActive - Whether the focus trap should be active
 * @returns {React.RefObject} - Ref to attach to the container element
 */
export function useFocusTrap(isActive) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus the first element when the trap becomes active
    if (firstElement) {
      firstElement.focus();
    }

    const handleTabKeyDown = (event) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        // Shift + Tab (backwards)
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab (forwards)
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    // Prevent focus from leaving the container
    const handleFocusOut = (event) => {
      if (!container.contains(event.relatedTarget)) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener('keydown', handleTabKeyDown);
    container.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('keydown', handleTabKeyDown);
      container.removeEventListener('focusout', handleFocusOut);
    };
  }, [isActive]);

  return containerRef;
}

export default useFocusTrap;
