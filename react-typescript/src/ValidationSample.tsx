import React from 'react';

const ValidationSample: React.FC = () => {
    type FormInfo = {password: string, clicked: boolean, validated: boolean, passRef: React.RefObject<HTMLInputElement>}
    const [form, setValues] = React.useState<FormInfo>({
        password: '',
        clicked: false,
        validated: false,
        passRef: React.useRef<HTMLInputElement>(null)
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleButtonClick = () => {
        setValues({
            ...form,
            clicked: true,
            validated: form.password === '0000',
        });
        if (form.passRef.current) {
            form.passRef.current.focus();
        }
        testMap();
    };

    const testMap = () => {
        let numbers = [1, 2, 3, 4, 5];
        let processed = numbers.map((num, idx) => num * idx);
        console.log(processed);
    }

    return (
        <div>
            <input name='password' type='password' value={form.password}
                onChange={handleChange} ref={form.passRef} 
                className={form.clicked ? (form.validated ? 'success' : 'failure') : ''}
            />
            <button onClick={handleButtonClick}>
                검증하기
            </button>
        </div>
    );
}

export default ValidationSample;