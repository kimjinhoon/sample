import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';
import './TodoList.scss';

interface TodoListProps {
    todos: {
        id: number,
        text: string,
        checked: boolean,
      }[];
    onRemove: Function;
    onToggle: Function;
}

const TodoList: React.FC<TodoListProps> = ({todos, onRemove, onToggle}) => {
    // const rowRenderer = useCallback(
    //     ({index, key, style }) => {
    //         const todo = todos[index];
    //         return (
    //             <TodoListItem
    //                 todo={todo}
    //                 key={key}
    //                 onRemove={onRemove}
    //                 onToggle={onToggle}
    //                 style={style}
    //             />
    //         );        
    //     }
    // ,[onRemove, onToggle, todos]);

    return (
        <div className="TodoList">
            {
                todos.map(todo => (
                    <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
                ))
            }
        </div>
    );
    // return (
    //     <List className="TodoList"
    //         width={512}
    //         height={513}
    //         rowCount={todos.length}
    //         rowHeight={57}
    //         rowRenderer={rowRenderer}
    //         list={todos}
    //         style={{outline: 'none'}}
    //     />
    // )
};

export default React.memo(TodoList);