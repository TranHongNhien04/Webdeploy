import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function Toast({
    message,
    type = 'success',
    duration = 3000,
    onClose,
}) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onClose) onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!isVisible) return null;

    const bgColor =
        type === 'success'
            ? 'bg-green-500'
            : type === 'error'
            ? 'bg-red-500'
            : type === 'warning'
            ? 'bg-yellow-500'
            : 'bg-blue-500';

    return (
        <div
            className={`fixed bottom-4 right-4 ${bgColor} text-white px-4 py-2 rounded-lg shadow-lg flex items-center z-50`}>
            <span>{message}</span>
            <button
                onClick={() => {
                    setIsVisible(false);
                    if (onClose) onClose();
                }}
                className="ml-2 text-white hover:text-gray-200">
                <X size={18} />
            </button>
        </div>
    );
}
