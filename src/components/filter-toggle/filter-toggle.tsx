import React from 'react';
import './filter-toggle.scss';
import { FilterOption } from 'src/types/types';

type FilterToggleConfig = {
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'outline';
    disabled?: boolean;
    className?: string;
    showDivider?: boolean;
    alignment?: 'start' | 'center' | 'end';
    label?: string;
};

type FilterToggleProps = {
    options: FilterOption[];
    selected: string | number;
    onSelect: (value: any) => void;
    config?: FilterToggleConfig;
};

export const FilterToggle: React.FC<FilterToggleProps> = ({
    options,
    selected,
    onSelect,
    config = {},
}) => {
    const {
        size = 'medium',
        variant = 'primary',
        disabled = false,
        className = '',
        showDivider = false,
        alignment = 'start',
        label,
    } = config;
    return (
        <div className="filter-toggle-wrapper">
            {label && <span className="filter-toggle__label">{label}</span>}
            <div
                className={`
          filter-toggle 
          filter-toggle--${size} 
          filter-toggle--${variant}
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
