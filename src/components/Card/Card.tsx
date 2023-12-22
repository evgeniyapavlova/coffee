import React, {memo} from "react";

export type CardProps = { children: any, onClick: () => void, bgr: string };

const Card: React.FC<CardProps> = ({children, onClick, bgr}) => {
    return <div
        style={{
            display: 'flex',
            color: 'white',
            margin: '24px 2%',
            height: 100,
            width: "46%",
            borderRadius: 10,
            background: bgr,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize:'1.2em'
        }}
        onClick={onClick}>{children}</div>
}

export default memo(Card);
