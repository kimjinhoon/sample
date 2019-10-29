import React from "react";
import PropTyeps from 'prop-types';
import {Button} from '@blueprintjs/core';

interface MyProp {
    name?: string;
}

const MyComponent: React.FC<MyProp> = ({name, children}) => {
    const [count, setCount] = React.useState<number>(0);
    const [message, setMessage] = React.useState<string>('');
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히 가세요');
    //const { name, children } = prop;
    return (<div>
        <p>안녕하세요, 제 이름은 {name} {children} 입니다.</p>
        <p onClick={() => setCount(count + 1)}>숫자: {count}</p>
        <Button onClick={onClickEnter}>입장</Button>
        <Button onClick={onClickLeave}>퇴장</Button>
        <p>{message}</p>
    </div>);
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.propTypes = {
    name: PropTyeps.string
}

export default MyComponent;