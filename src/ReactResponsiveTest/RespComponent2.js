import React, { useContext } from 'react';
import { MediaQueryContext } from './MediaQueryProvider';

const RespComponent2 = () => {
    // Access the media query states from the context
    const { isSmallScreen, isMediumScreen, isLargeScreen } = useContext(MediaQueryContext);
    return (
        <div>
            <h2>Component Two</h2>
            <p>Is small screen? {isSmallScreen ? 'Yes' : 'No'}</p>
            <p>Is medium screen? {isMediumScreen ? 'Yes' : 'No'}</p>
            <p>Is large screen? {isLargeScreen ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default RespComponent2