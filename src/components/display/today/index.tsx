import React from 'react';

const Today: React.FC = () => {
    const currentDate = new Date().toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="bg-white p-4 rounded-md">
            <span className="text-xl font-semibold">{currentDate}</span>
        </div>
    );
};

export default Today;
