import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import UserProfileDetails from '../components/UserProfileDetails';

export default function Profile() {
    const { user, isAuthenticated } = useAuth();
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUserDetails() {
            if (user && user.id) {
                try {
                    console.log('Fetching user details for ID:', user.id);
                    const response = await fetch(
                        `http://localhost:3001/users?id=${user.id}`
                    );
                    if (response.ok) {
                        const data = await response.json();
                        console.log('API response:', data);
                        if (data.length > 0) {
                            console.log('Fetched user details:', data[0]);
                            setUserDetails(data[0]);
                        } else {
                            console.log('No user found with ID:', user.id);
                        }
                    } else {
                        console.error(
                            'API error:',
                            response.status,
                            response.statusText
                        );
                    }
                } catch (error) {
                    console.error('Error fetching user details:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                console.log('No user ID available');
                setLoading(false);
            }
        }

        fetchUserDetails();
    }, [user]);

    // Hàm xử lý cập nhật thông tin người dùng
    const handleUserUpdate = (updatedUser) => {
        setUserDetails(updatedUser);
    };

    // Nếu chưa đăng nhập, chuyển hướng về trang chủ
    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <p>Đang tải thông tin...</p>
            </div>
        );
    }

    // Sử dụng userDetails nếu có, nếu không thì dùng user từ context
    const displayUser = userDetails || user;
    console.log('Display user:', displayUser);

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto">
                <UserProfileDetails
                    user={displayUser}
                    onUserUpdate={handleUserUpdate}
                />
            </div>
        </div>
    );
}
