import { useEffect } from 'react';

/**
 * Custom hook to disable DevTools shortcuts and right-click context menu
 * Note: This provides basic deterrence only and can be bypassed by determined users
 */
export function useDevToolsProtection(): void {
    useEffect(() => {
        // Disable right-click context menu
        const handleContextMenu = (e: MouseEvent): boolean => {
            e.preventDefault();
            return false;
        };

        // Disable DevTools keyboard shortcuts
        const handleKeyDown = (e: KeyboardEvent): boolean => {
            // F12 - DevTools
            if (e.keyCode === 123) {
                e.preventDefault();
                return false;
            }

            // Ctrl+Shift+I - DevTools
            if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
                e.preventDefault();
                return false;
            }

            // Ctrl+Shift+J - Console
            if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
                e.preventDefault();
                return false;
            }

            // Ctrl+U - View Source
            if (e.ctrlKey && e.keyCode === 85) {
                e.preventDefault();
                return false;
            }

            // Ctrl+Shift+C - Inspect Element
            if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
                e.preventDefault();
                return false;
            }

            // Ctrl+Shift+K - Firefox Console
            if (e.ctrlKey && e.shiftKey && e.keyCode === 75) {
                e.preventDefault();
                return false;
            }

            // F5 and Ctrl+R are allowed (page refresh)
            return true;
        };

        // Add event listeners
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup on unmount
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
}
