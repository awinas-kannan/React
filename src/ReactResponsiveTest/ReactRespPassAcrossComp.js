import React from 'react';
import { MediaQueryProvider } from './MediaQueryProvider';
import RespComponent1 from './RespComponent1';
import RespComponent2 from './RespComponent2';
import RespComponent3 from './RespComponent3';

const ReactRespPassAcrossComp = () => {
    return (
        <MediaQueryProvider>
            <RespComponent1 />
            <RespComponent2 />
            <RespComponent3 />
        </MediaQueryProvider>
    );
};

export default ReactRespPassAcrossComp;