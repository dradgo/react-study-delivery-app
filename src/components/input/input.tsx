import React, { ReactElement, ReactNode } from 'react';
import './input.scss';

type InputProps = {
    label?: string;
    error?: string;
    icon?: ReactElement<SVGElement> | ReactNode;
    test?: ReactNode
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: React.FC<InputProps> = ({ label, error, icon, test, ...props }) => {
    return (
        <div className="input-container">
            {test}
            {label && <label className="input-label">{label}</label>}
            <div className="input-with-icon">
                {icon ? <span className="input-icon">{icon}</span> : null}
                <input className={`input-field ${error ? 'input-error' : ''}`} {...props} />
            </div>
            {error && <span className="input-error-message">{error}</span>}
        </div>
    );
};

export default Input;
