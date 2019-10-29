import React from 'react';

const IterationSample: React.FC = () => {
    //const names = ['눈사람', '얼음', '눈', '바람'];
    const [names, setNames] = React.useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'},
    ]);
    const [inputText, setInputText] = React.useState('');
    const [nextId, setNextId] = React.useState(5);

    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };
    const onRemove = (id: number) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>버튼추가</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default IterationSample;