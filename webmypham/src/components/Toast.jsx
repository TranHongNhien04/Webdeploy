import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Toast({
    message,
    type = 'info',
    duration = 3000,
    onClose,
}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

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
                onClick={onClose}
                className="ml-3 text-white hover:text-gray-200">
                <X size={18} />
            </button>
        </div>
    );
}
