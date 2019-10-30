import React, { useState, useEffect, useReducer, useRef } from 'react';

type State = {
    name: string;
    nickname: string;
}

type Action = {
    name: string;
    value: string;
}

function reducer(state: State, action: Action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, {name: '', nickname: ''});
    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');
    const {name, nickname} = state;
    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
        console.log({name, nickname});
    }, [name]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(e.target);
    };

    // const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setName(e.target.value);
    // };

    // const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setNickname(e.target.value);
    // };

    return (
        <div>
            <div>
                <input name='name' value={name} onChange={onChange} />
                <input name='nickname' value={nickname} onChange={onChange} />
            </div>
            <div>
                이름: {name}, 닉네임: {nickname}
            </div>
        </div>
    );
};

export const RefSample = () => {
    const id = useRef(1);
    const setId = (n: number) => {
        id.current = n;
    }
    const printId = () => {
        console.log(id.current);
    }

    return (
        <div>
            RefSample
        </div>
    )
}

export default Info;