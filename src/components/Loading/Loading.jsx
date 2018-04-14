// @flow

import React from 'react';
import loadingAnimation from 'assets/loading.gif';

const Loading = () => (
    <div className="Loading-gif">
        <img src={loadingAnimation} alt="loading" />
    </div>
);

export default Loading;
