import React, { useEffect, useState } from "react";

const TimeWidget: React.FC = () => {
    const [time, setTime] = useState<string>("");
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);
    
    return <div className="time-widget">{time}</div>;
};

export default TimeWidget;