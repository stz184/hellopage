import React, { useState, useRef, useEffect } from 'react';

type TooltipProps = {
    text: string,
    children: React.ReactElement,
    enabled?: boolean
};

const Tooltip: React.FC<TooltipProps> = ({ text, children, enabled = true }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleWindowResize = () => {
            setShowTooltip(false);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        if (showTooltip) {
            calculateTooltipPosition();
        }
    }, [showTooltip]);

    const handleMouseEnter = () => {
        if (enabled && !showTooltip) {
            setShowTooltip(true);
        }
    };

    const handleMouseLeave = () => {
       setShowTooltip(false);
    };

    const calculateTooltipPosition = () => {
        console.log('calculateTooltipPosition', tooltipRef.current, parentRef.current);
        if (tooltipRef.current && parentRef.current) {
            const tooltipHeight = tooltipRef.current.offsetHeight;
            const parentRect = parentRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const spaceAbove = parentRect.top;
            const spaceBelow = windowHeight - parentRect.bottom;

            tooltipRef.current.style.left = `${parentRect.left}px`;
            if (spaceBelow >= tooltipHeight || spaceBelow >= spaceAbove) {
                tooltipRef.current.style.top = `${parentRect.bottom}px`;
                tooltipRef.current.style.bottom = 'auto';
            } else {
                tooltipRef.current.style.top = 'auto';
                tooltipRef.current.style.bottom = `${windowHeight - parentRect.top}px`;
            }
        }
    };

    return (
        <>
            <div className="my-tooltip" ref={tooltipRef} style={{left: (!enabled || !showTooltip) ? '-999999px' : 0, top: (!enabled || !showTooltip) ? '-999999px' : 0}}>
                <div dangerouslySetInnerHTML={{ __html: text }} />
                <div className="arrow-down" />
            </div>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={parentRef}
            >
                {children}
            </div>
        </>
    );
};

export default Tooltip;
