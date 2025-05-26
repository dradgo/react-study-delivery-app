import { useState } from 'react';
import Input from 'src/components/input/input';
import { useUser } from 'src/context/user-context';

export const DeliverySecton = () => {
    const userProfile = useUser();

    const [address, setAddress] = useState('');
    const [name, setName] = useState(userProfile.credentials?.email);
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');

    return (
        <div className="delivery-section">
            <Input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
            />
            <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <Input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
            />
            <label>
                Additional Notes:
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Enter any additional order details"
                />
            </label>
        </div>
    );
};
