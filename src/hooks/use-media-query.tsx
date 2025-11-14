import * as React from 'react';

// Defines the custom hook that accepts a media query string
function useMediaQuery(query: string) {
  // 1. Initialize state based on server-side rendering (SSR)
  // We default to false on the server, as window is unavailable.
  const [matches, setMatches] = React.useState(false);

  // 2. Set up the effect to run only on the client side (after component mounts)
  React.useEffect(() => {
    // Check if the browser supports window.matchMedia
    if (typeof window === 'undefined' || !window.matchMedia) {
      // Log an error or return early if running in a restricted environment
      console.error('useMediaQuery requires window.matchMedia support.');
      return;
    }

    // Create the MediaQueryList object based on the input query
    const mediaQueryList = window.matchMedia(query);

    // Function to update the React state
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Set the initial state immediately (crucial for quick hydration)
    setMatches(mediaQueryList.matches);

    // 3. Attach the listener to the MediaQueryList object
    // Use the modern 'addEventListener' for performance and correctness
    try {
      mediaQueryList.addEventListener('change', listener);
    } catch (e) {
      // Fallback for older browsers (deprecated)
      mediaQueryList.addListener(listener);
    }

    // 4. Clean up the listener when the component unmounts
    return () => {
      try {
        mediaQueryList.removeEventListener('change', listener);
      } catch (e) {
        mediaQueryList.removeListener(listener);
      }
    };
  }, [query]); // Re-run effect only if the media query string changes

  return matches;
}

// FIX: Change to default export to prevent import mismatches elsewhere in the application.
export default useMediaQuery;
