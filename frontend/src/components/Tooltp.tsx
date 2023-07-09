import React, { useState } from 'react';

const Tooltip = ({ text, children, enabled = true }: {text: string, children: React.ReactElement, enabled: boolean}) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="position-relative w-100" onMouseLeave={() => setShowTooltip(false)}>
            <div
                className="position-relative"
                onMouseEnter={() => setShowTooltip(true)}
            >
                {children}
            </div>
            {enabled && showTooltip && (
                <div className="my-tooltip">
                    {text}
                    <div className="arrow-down"></div>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
