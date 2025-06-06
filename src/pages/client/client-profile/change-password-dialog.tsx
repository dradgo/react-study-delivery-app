import React, { useState } from 'react';
import Input from 'src/components/input/input';
import './change-password-dialog.scss';

interface ChangePasswordDialogProps {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export const ChangePasswordDialog: React.FC<ChangePasswordDialogProps> = ({
    open,
    onClose,
    onSuccess,
}) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (oldPassword !== 'qwerty') {
            setError('Неверный текущий пароль');
            return;
        }
        if (newPassword.length < 6) {
            setError('Новый пароль должен быть не менее 6 символов');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }
        setError('');
        onSuccess();
        onClose();
    };

    if (!open) return null;

    return (
        <div className="dialog-overlay">
            <div className="dialog">
                <h2>Изменить пароль</h2>
                <form onSubmit={handleSubmit} className="change-password-form">
                    <Input
                        type="password"
                        placeholder="Старый пароль"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Новый пароль"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Повторите новый пароль"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {error && <div className="error-message">{error}</div>}
                    <div className="dialog-buttons">
                        <button type="submit">Сохранить</button>
                        <button type="button" onClick={onClose}>
                            Отмена
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePasswordDialog;
