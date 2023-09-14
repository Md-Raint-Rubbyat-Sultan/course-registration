import React, { useEffect, useState } from 'react';

const Toast = () => {
    const [isActive, SetIsActive] = useState(() => true);

    const toastInterval = () => {
        SetIsActive((prev) => !prev);
    }

    useEffect(() => {
        const interval = setTimeout(toastInterval, 7000);
        return () => clearTimeout(interval);
    }, [])

    return (
        <div className={`text-xl bg-white px-4 py-2 border-2 absolute right-3 bottom-3 ${isActive ? "block" : "hidden"}`}>
            <h3>Toast</h3>
        </div>
    );
};

export default Toast;