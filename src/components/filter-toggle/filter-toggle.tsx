import React from 'react';
import './filter-toggle.scss';

export interface FilterOption {
  id: string | number;
  label: string;
  icon?: React.ReactNode;
  value: any;
}

interface FilterToggleProps {
  options: FilterOption[];
  selected: string | number;
  onSelect: (value: any) => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  isFullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  showDivider?: boolean;
  alignment?: 'start' | 'center' | 'end';
  label?: string;
}

export const FilterToggle: React.FC<FilterToggleProps> = ({
  options,
  selected,
  onSelect,
  size = 'medium',
  variant = 'primary',
  isFullWidth = false,
  disabled = false,
  className = '',
  showDivider = false,
  alignment = 'start',
  label
}) => {
  return (
    <div className="filter-toggle-wrapper">
      {label && <span className="filter-toggle__label">{label}</span>}
      <div 
        className={`
          filter-toggle 
          filter-toggle--${size} 
          filter-toggle--${variant}
          ${isFullWidth ? 'filter-toggle--full-width' : ''}
          ${disabled ? 'filter-toggle--disabled' : ''}
          filter-toggle--${alignment}
          ${className}
        `}
      >
        {options.map((option, index) => (
          <React.Fragment key={option.id}>
            <button
              className={`filter-toggle__btn ${selected === option.id ? 'active' : ''}`}
              onClick={() => onSelect(option.value)}
              disabled={disabled}
              title={option.label}
            >
              {option.icon && (
                <span className="filter-toggle__btn-icon">{option.icon}</span>
              )}
              <span className="filter-toggle__btn-label">{option.label}</span>
            </button>
            {showDivider && index < options.length - 1 && (
              <span className="filter-toggle__divider" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}; 