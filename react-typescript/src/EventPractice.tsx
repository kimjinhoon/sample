import React from 'react';

const EventPractice: React.FC = () => {
    let [message, setMessage] = React.useState('');
 
    let chagneHandler = (e: any) => {
        setMessage(e.target.value);
    }

    let clickHandler = () => {
        alert(message);
        setMessage('');
    }

    let keypressHandler = (e: any) => {
        if(e.key === 'Enter') {
            clickHandler();
        }
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type='text' name='message' placeholder='아무거나 입력해라' value={message}
                onChange={chagneHandler} onKeyPress={keypressHandler}
            />
            <button onClick={clickHandler}
            >확인</button>
        </div>
    );
};

export default EventPractice;