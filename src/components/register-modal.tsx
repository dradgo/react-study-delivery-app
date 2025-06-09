import React, { useState } from 'react';
import './register-modal.scss';

const fieldsConfig: Record<
    string,
    { name: string; placeholder: string; type?: string; isTextarea?: boolean }[]
> = {
    client: [
        { name: 'firstName', placeholder: 'First Name' },
        { name: 'lastName', placeholder: 'Last Name' },
        { name: 'phone', placeholder: 'Phone' },
        { name: 'email', placeholder: 'Email', type: 'email' },
    ],
    courier: [
        { name: 'firstName', placeholder: 'First Name' },
        { name: 'lastName', placeholder: 'Last Name' },
        { name: 'phone', placeholder: 'Phone' },
        { name: 'email', placeholder: 'Email', type: 'email' },
        { name: 'socialId', placeholder: 'Social ID' },
    ],
    restaurant: [
        { name: 'name', placeholder: 'Restaurant Name' },
        { name: 'description', placeholder: 'Description', isTextarea: true },
        { name: 'phone', placeholder: 'Phone' },
        { name: 'email', placeholder: 'Email', type: 'email' },
        { name: 'address', placeholder: 'Address' },
    ],
};

const RegisterModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [userType, setUserType] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        socialId: '',
        name: '',
        description: '',
        address: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Register</h2>
                {!userType ? (
                    <div>
                        <label>Select User Type:</label>
                        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                            <option value="">Select...</option>
                            <option value="client">Client</option>
                            <option value="courier">Courier</option>
                            <option value="restaurant">Restaurant</option>
                        </select>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {fieldsConfig[userType]?.map((field) =>
                            field.isTextarea ? (
                                <textarea
                                    key={field.name}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            ) : (
                                <input
                                    key={field.name}
                                    type={field.type || 'text'}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    onChange={handleChange}
                                    required
                                />
                            )
                        )}
                        <button type="submit">Register</button>
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RegisterModal;
