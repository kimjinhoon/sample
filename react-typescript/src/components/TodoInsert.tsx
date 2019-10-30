import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

interface TodoInsertProps {
    onInsert: Function
}

const TodoInsert: React.FC<TodoInsertProps> = ({onInsert}) => {
    const [value, setValue] = useState('');
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);
    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]);

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요" 
                value={value}
                onChange={onChange}            
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;