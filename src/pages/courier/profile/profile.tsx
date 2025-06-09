import React, { useState } from 'react';
import { useUser } from '../../../context/user-context';
import './profile.scss';

interface AvailabilitySlot {
    start: string;
    end: string;
}

type WeeklyAvailability = {
    Monday: AvailabilitySlot;
    Tuesday: AvailabilitySlot;
    Wednesday: AvailabilitySlot;
    Thursday: AvailabilitySlot;
    Friday: AvailabilitySlot;
    Saturday: AvailabilitySlot;
    Sunday: AvailabilitySlot;
};

interface Profile {
    name: string;
    phone: string;
    availability: WeeklyAvailability;
}

const CourierProfilePage: React.FC = () => {
    useUser();
    const [profile, setProfile] = useState<Profile>({
        name: 'John Doe',
        phone: '+1234567890',
        availability: {
            Monday: { start: '10:00', end: '18:00' },
            Tuesday: { start: '', end: '' },
            Wednesday: { start: '09:00', end: '17:00' },
            Thursday: { start: '', end: '' },
            Friday: { start: '', end: '' },
            Saturday: { start: '', end: '' },
            Sunday: { start: '', end: '' },
        },
    });

    const handleAvailabilityChange = (
        day: keyof WeeklyAvailability,
        field: 'start' | 'end',
        value: string
    ) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            availability: {
                ...prevProfile.availability,
                [day]: {
                    ...prevProfile.availability[day],
                    [field]: value,
                },
            },
        }));
    };

    return (
        <div className="courier-profile-container">
            <h2>Courier Profile</h2>
            <div className="profile-section">
                <label>
                    <strong>Name:</strong>
                    <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    />
                </label>
            </div>
            <div className="profile-section">
                <label>
                    <strong>Phone:</strong>
                    <input
                        type="text"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    />
                </label>
            </div>
            <div className="profile-section availability">
                <h3>Weekly Availability</h3>
                <ul>
                    {Object.keys(profile.availability).map((day) => (
                        <li key={day}>
                            <label>
                                <strong>{day}:</strong>
                                <input
                                    type="time"
                                    value={
                                        profile.availability[day as keyof WeeklyAvailability].start
                                    }
                                    onChange={(e) =>
                                        handleAvailabilityChange(
                                            day as keyof WeeklyAvailability,
                                            'start',
                                            e.target.value
                                        )
                                    }
                                />
                                to
                                <input
                                    type="time"
                                    value={
                                        profile.availability[day as keyof WeeklyAvailability].end
                                    }
                                    onChange={(e) =>
                                        handleAvailabilityChange(
                                            day as keyof WeeklyAvailability,
                                            'end',
                                            e.target.value
                                        )
                                    }
                                />
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CourierProfilePage;
