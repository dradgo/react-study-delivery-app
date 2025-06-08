// pages/restaurant/manage.tsx
import React, { useEffect, useState } from 'react';
import { Wrapper } from '../../../components/wrapper/wrapper';
import { MenuItem } from '../../../types/menu';
import { dishesMock } from '../../../mocks/dishes';
import './menu-management.scss';

const MenuManagement: React.FC = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>(dishesMock);
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        setCategories(menuItems.map((item) => item.category));
    }, [menuItems]);

    const addMenuItem = (item: MenuItem) => {
        setMenuItems([...menuItems, { ...item, id: Date.now() }]);
    };

    const editMenuItem = (id: number, updatedItem: Partial<MenuItem>) => {
        setMenuItems(
            menuItems.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
        );
    };

    const deleteMenuItem = (id: number) => {
        setMenuItems(menuItems.filter((item) => item.id !== id));
    };

    const addCategory = (category: string) => {
        setCategories([...categories, category]);
    };

    const deleteCategory = (category: string) => {
        setCategories(categories.filter((cat) => cat !== category));
    };

    return (
        <Wrapper>
            <div className="menu-management">
                <h1 className="menu-management__title">Управление меню</h1>
                <div className="menu-management__items">
                    {menuItems.map((item) => (
                        <div key={item.id} className="menu-management__item">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="menu-management__item-image"
                            />
                            <h2 className="menu-management__item-name">{item.name}</h2>
                            <p className="menu-management__item-price">Цена: {item.price}</p>
                            <p className="menu-management__item-nutrition">
                                Состав: {item.nutrition.fat}, Сахар: {item.nutrition.sugar}, Белок:{' '}
                                {item.nutrition.protein}, Калории: {item.nutrition.calories}
                            </p>
                            <p className="menu-management__item-nutrition">
                                Есть в наличии: {item.available ? 'Да' : 'Нет'}
                            </p>
                            <div className="menu-management__item-actions">
                                <button
                                    className="button button--primary"
                                    onClick={() =>
                                        editMenuItem(item.id, { available: !item.available })
                                    }
                                >
                                    Изменить доступность
                                </button>
                                <button
                                    className="button button--danger"
                                    onClick={() => deleteMenuItem(item.id)}
                                >
                                    Удалить
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default MenuManagement;
