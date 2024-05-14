import React, { createContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

// Create a context
export const MediaQueryContext = createContext();

export const MediaQueryProvider = ({ children }) => {
    // Define your media queries
    const isSmallScreen = useMediaQuery({ maxWidth: 768 });
    const isMediumScreen = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
    const isLargeScreen = useMediaQuery({ minWidth: 1025 });

    // Pass the media query states through the context
    return (
        <MediaQueryContext.Provider value={{ isSmallScreen, isMediumScreen, isLargeScreen }}>
            {children}
        </MediaQueryContext.Provider>
    );
};