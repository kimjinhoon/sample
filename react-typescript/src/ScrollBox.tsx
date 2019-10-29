import React from 'react';

const ScrollBox: React.FC = () => {

    const scrollToBottom = () => {
        if (boxRef.current) {
            boxRef.current.scrollTop = boxRef.current.scrollHeight - boxRef.current.clientHeight;
        }
    }

    const boxRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

    const sytle = {
        border: '1px solid black',
        height: '300px',
        width: '300px',
        overflow: 'auto'
    };

    const innerStyle = {
        width: '100%',
        height: '650px',
        background: 'linear-gradient(white, black)'
    }

    return (
        <div style={sytle} ref={boxRef}>
            <div style={innerStyle}/>
        </div>
    )
}

export default ScrollBox;