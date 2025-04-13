import React, { useState } from 'react';
import './customization-dialog.scss';

interface CustomizationDialogProps {
    open: boolean;
    onClose: () => void;
    customizations: any[];
    onAddToCart: (selectedOptions: Record<any, any>) => void;
}

export const CustomizationDialog: React.FC<CustomizationDialogProps> = React.memo(
    ({ open, onClose, customizations, onAddToCart }) => {
        const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

        const handleOptionChange = (name: string, value: string) => {
            console.log('Selected Option:', name, value);
            setSelectedOptions((prev) => ({ ...prev, [name]: value }));
        };

        const handleAddToCart = () => {
            console.log('Selected Options - dialog:', selectedOptions);
            onAddToCart(selectedOptions);
            onClose();
        };

        if (!open) return null;
        console.log('Selected Options:', customizations);

        return (
            <div className="dialog-overlay">
                <div className="dialog">
                    <h2>Customize Your Item</h2>
                    {customizations.map((customization) => (
                        <div key={customization.name}>
                            <h3>{customization.name}</h3>
                            {customization.options.map((option: any) => (
                                <label key={option.value}>
                                    <input
                                        type="radio"
                                        name={customization.name}
                                        value={option.value}
                                        onChange={() =>
                                            handleOptionChange(customization.name, option.value)
                                        }
                                    />
                                    {option.label} (+${option.extraPrice || 0})
                                </label>
                            ))}
                        </div>
                    ))}
                    <button onClick={handleAddToCart}>Add to Cart</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        );
    }
);
