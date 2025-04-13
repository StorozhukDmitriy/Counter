import  {ButtonHTMLAttributes} from 'react';

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement>


export const Button = ({children,onClick,disabled,className}:ButtonPropsType) => {
    return (
        <button className={className} disabled={disabled} onClick={onClick}>{children}</button>
    );
};

