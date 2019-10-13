import React from "react";

interface MyProp {
    name?: string;
}

const MyComponent: React.FC<MyProp> = (prop) => {
    const [count, setCount] = React.useState<number>(0);
    return (<div>
        <p>안녕하세요, 제 이름은 {prop.name} 입니다.</p>
        <p onClick={() => setCount(count + 1)}>숫자: {count}</p>
    </div>);
};

export default MyComponent;