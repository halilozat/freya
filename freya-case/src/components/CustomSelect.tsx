import React, {useState, useEffect, useRef, Dispatch, SetStateAction} from 'react';
import styles from '../styles/CustomSelect.module.css';

interface Option {
    value: string;
    label: string;
}

interface Props {
    options: Option[];
    selectedOption: string
    onOptionSelect: Dispatch<SetStateAction<string>>;
}

const CustomSelect = ({ options, selectedOption, onOptionSelect }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSelectClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: Option) => {
        onOptionSelect(option.value);
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles['custom-select-container']} ref={containerRef}>
            <div className={styles['custom-select']} onClick={handleSelectClick}>
                {selectedOption ? options.find(option => option.value === selectedOption)?.label : 'Filtrele'}
                <img
                    src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.58934 7.74408C5.2639 7.41864 4.73626 7.41864 4.41083 7.74408C4.08539 8.06951 4.08539 8.59715 4.41083 8.92259L9.41083 13.9226C9.73626 14.248 10.2639 14.248 10.5893 13.9226L15.5893 8.92259C15.9148 8.59715 15.9148 8.06951 15.5893 7.74408C15.2639 7.41864 14.7363 7.41864 14.4108 7.74408L10.0001 12.1548L5.58934 7.74408Z' fill='%23313144'/%3E%3C/svg%3E"
                    alt="dropdown icon"
                    className={styles['custom-select-icon']}
                />
            </div>
            {isOpen && (
                <div className={styles['custom-select-dropdown']}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={styles['custom-option']}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
