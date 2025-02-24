import React, { useState } from 'react';

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
        address: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registering user:', userType, formData);
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
                        {userType === 'client' && (
                            <>
                                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
                                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                            </>
                        )}
                        {userType === 'courier' && (
                            <>
                                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
                                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                                <input type="text" name="socialId" placeholder="Social ID" onChange={handleChange} required />
                            </>
                        )}
                        {userType === 'restaurant' && (
                            <>
                                <input type="text" name="name" placeholder="Restaurant Name" onChange={handleChange} required />
                                <textarea name="description" placeholder="Description" onChange={handleChange} required></textarea>
                                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
                                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                                <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
                            </>
                        )}
                        <button type="submit">Register</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RegisterModal;
