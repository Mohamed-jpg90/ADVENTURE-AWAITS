import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];  // Fixed typo: "byn" → "btn"
const SIZES = ['btn--medium', 'btn--large'];      // Fixed typo: "larg" → "large"

export const Button = ({
    children,
    type,
    onClick,  // Fixed typo: "onclick" → "onClick" (React uses camelCase)
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                type={type}
                onClick={onClick}
            >
                {children}
            </button>
        </Link>
    );
};