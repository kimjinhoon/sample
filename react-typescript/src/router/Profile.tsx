import React from 'react';
import { RouteComponentProps } from 'react-router';

const data = {
    hoon: {
        name: '훈남',
        desc: '멋진 훈이'
    },
    kong: {
        name: '이쁜이',
        desc: '이쁜 인혜'
    }
};

interface MatchParams {
    username: string
}

export const Profile: React.FC<RouteComponentProps<MatchParams>> = ({match}) => {
    const { username } = match.params;
    //const profile: any = data[username];
    return (
        <div>

        </div>
    );
};