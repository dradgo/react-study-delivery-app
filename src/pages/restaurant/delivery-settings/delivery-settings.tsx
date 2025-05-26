import React, { useState } from 'react';
import { Wrapper } from 'src/components/wrapper/wrapper';
import './styles.scss';
import Input from 'src/components/input/input';
import { validateTime, validateTimeRange } from 'src/helpers/validation';

type TimeSlot = {
    day: string;
    open: string;
    close: string;
    isHoliday: boolean;
};

type RestaurantInfo = {
    name: string;
    address: string;
    phone: string;
    email: string;
    logo: string;
    banner: string;
};
const WORKING_HOURS_MOCK = [
    { day: 'Понедельник', open: '09:00', close: '22:00', isHoliday: false },
    { day: 'Вторник', open: '09:00', close: '22:00', isHoliday: false },
    { day: 'Среда', open: '09:00', close: '22:00', isHoliday: false },
    { day: 'Четверг', open: '09:00', close: '22:00', isHoliday: false },
];

const RESTAURANT_INFO_MOCK = {
    name: 'Название ресторана',
    address: 'Адрес ресторана',
    phone: '+7 (999) 123-45-67',
    email: 'restaurant@example.com',
    logo: '/path-to-logo.png',
    banner: '/path-to-banner.png',
};

const DeliverySettings: React.FC = () => {
    const [workingHours, setWorkingHours] = useState<TimeSlot[]>(WORKING_HOURS_MOCK);
    const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo>(RESTAURANT_INFO_MOCK);
    const [timeError, setTimeError] = useState<string | null>(null);

    const handleTimeChange = (day: string, field: 'open' | 'close', value: string) => {
        const currentSlot = workingHours.find((slot) => slot.day === day);
        if (!currentSlot) return;

        const newOpen = field === 'open' ? value : currentSlot.open;
        const newClose = field === 'close' ? value : currentSlot.close;

        if (!validateTimeRange(newOpen, newClose)) {
            setTimeError('Время открытия должно быть раньше времени закрытия');
            return;
        }
        setTimeError(null);
        setWorkingHours((prev) =>
            prev.map((slot) => (slot.day === day ? { ...slot, [field]: value } : slot))
        );
    };

    const toggleHoliday = (day: string) => {
        setWorkingHours((prev) =>
            prev.map((slot) => (slot.day === day ? { ...slot, isHoliday: !slot.isHoliday } : slot))
        );
    };

    const handleInfoChange = (field: keyof RestaurantInfo, value: string) => {
        setRestaurantInfo((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <Wrapper>
            <div className="restaurant-profile">
                <h1 className="restaurant-profile__title">Настройки ресторана</h1>

                <div className="restaurant-profile__sections">
                    <section className="restaurant-profile__section">
                        <h2>Информация о ресторане</h2>
                        <div className="restaurant-profile__info">
                            <div>
                                <label>Название ресторана</label>
                                <Input
                                    type="text"
                                    value={restaurantInfo.name}
                                    onChange={(e) => handleInfoChange('name', e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Адрес</label>
                                <Input
                                    type="text"
                                    value={restaurantInfo.address}
                                    onChange={(e) => handleInfoChange('address', e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Телефон</label>
                                <Input
                                    type="tel"
                                    value={restaurantInfo.phone}
                                    onChange={(e) => handleInfoChange('phone', e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <Input
                                    type="email"
                                    value={restaurantInfo.email}
                                    onChange={(e) => handleInfoChange('email', e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Логотип</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                handleInfoChange('logo', reader.result as string);
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <label>Баннер</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                handleInfoChange('banner', reader.result as string);
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="restaurant-profile__section">
                        <h2>График работы</h2>
                        {timeError && <div className="restaurant-profile__error">{timeError}</div>}
                        <div className="restaurant-profile__schedule">
                            {workingHours.map((slot) => (
                                <div key={slot.day} className="restaurant-profile__time-slot">
                                    <div className="restaurant-profile__day">
                                        <Input
                                            type="checkbox"
                                            checked={slot.isHoliday}
                                            onChange={() => toggleHoliday(slot.day)}
                                        />
                                        <span>{slot.day}</span>
                                    </div>
                                    <div className="restaurant-profile__time-inputs">
                                        <Input
                                            type="time"
                                            value={slot.open}
                                            onChange={(e) =>
                                                handleTimeChange(slot.day, 'open', e.target.value)
                                            }
                                            disabled={slot.isHoliday}
                                        />
                                        <span>—</span>
                                        <Input
                                            type="time"
                                            value={slot.close}
                                            onChange={(e) =>
                                                handleTimeChange(slot.day, 'close', e.target.value)
                                            }
                                            disabled={slot.isHoliday}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </Wrapper>
    );
};

export default DeliverySettings;
