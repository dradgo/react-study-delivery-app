import React from 'react';

import './wrapper.scss';

type WrapperProps = {
    className?: string;
    direction?: 'row' | 'column';
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
    gap?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Wrapper: React.FC<React.PropsWithChildren<WrapperProps>> = ({
    children,
    className = '',
    direction = 'column',
    justify = '',
    align = '',
    gap = '0px',
    ...rest
}) => {
    const wrapperStyles = `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
  `.trim();

    return (
        <div
            className={`wrapper ${className}`}
            style={{
                ...rest.style,
                ...(CSS.supports('display', 'flex') && { cssText: wrapperStyles }),
            }}
            {...rest}
        >
            {children}
        </div>
    );
};
