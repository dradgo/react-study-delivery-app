import React, { useState } from 'react';
import { useUser } from '../../../context/user-context';
import { Wrapper } from '../../../components/wrapper/wrapper';
import ChangePasswordDialog from './change-password-dialog';
import './client-profile.scss';

// Базовый компонент профиля пользователя
export const ClientProfile: React.FC = () => {
    const client = useUser();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    if (!client) {
        return <div>Загрузка...</div>;
    }

    const handleSuccess = () => {
        setSuccessMessage('Пароль успешно обновлен');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <Wrapper>
            <h1>Профиль пользователя</h1>
            <div className="profile-info">
                <p>
                    <strong>Тип пользователя:</strong> {client.userType || 'Не указан'}
                </p>
                <p>
                    <strong>Имя:</strong> {'Не указано'}
                </p>
                <p>
                    <strong>Email:</strong> {'Не указан'}
                </p>
            </div>
            <button onClick={() => setDialogOpen(true)}>Изменить пароль</button>
            {successMessage && <div className="change-password-success">{successMessage}</div>}
            <ChangePasswordDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onSuccess={handleSuccess}
            />
        </Wrapper>
    );
};
