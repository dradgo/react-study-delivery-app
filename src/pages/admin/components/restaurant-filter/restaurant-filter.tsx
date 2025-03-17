import * as React from 'react';
import { SortOption } from '../../types';
import './restaurant-filter.scss';

interface Props {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
}

export const RestaurantFilter: React.FC<Props> = ({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <>
      <div className="admin-dashboard__search">
        <input
          type="text"
          placeholder="Поиск ресторана..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="admin-dashboard__search-input"
        />
      </div>

      <div className="admin-dashboard__sort">
        <span>Сортировать по:</span>
        <button
          className={`admin-dashboard__sort-btn ${sortBy === 'totalOrders' ? 'active' : ''}`}
          onClick={() => onSortChange('totalOrders')}
        >
          Количеству заказов
        </button>
        <button
          className={`admin-dashboard__sort-btn ${sortBy === 'revenue' ? 'active' : ''}`}
          onClick={() => onSortChange('revenue')}
        >
          Выручке
        </button>
        <button
          className={`admin-dashboard__sort-btn ${sortBy === 'rating' ? 'active' : ''}`}
          onClick={() => onSortChange('rating')}
        >
          Рейтингу
        </button>
      </div>
    </>
  );
}; 