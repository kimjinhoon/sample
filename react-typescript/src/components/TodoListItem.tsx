import React from 'react';
import {
    MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

interface TodoListItemProps {
    todo: {
        id: number,
        text: string,
        checked: boolean,
    };
    onRemove: Function;
    onToggle: Function;
    style?: any;
}

const TodoListItem: React.FC<TodoListItemProps> = ({todo, onRemove, onToggle}) => {
    const { id, text, checked } = todo;
    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);