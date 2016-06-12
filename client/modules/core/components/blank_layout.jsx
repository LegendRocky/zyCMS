import React from 'react';

const BlankLayout = ({content = () => null }) => (
    <div>
        <div id="main">
            {content()}
        </div>
    </div>
);

export default BlankLayout;
