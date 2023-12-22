import React, {memo} from "react";
import Card from "../Card";
import {menu_items} from "../../data/menu_items";

export type ContainerProps = {};

const Container: React.FC<ContainerProps> = () => {
    const onClick = (key: string) => {
        alert(key)
    }

    return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
        {menu_items.map(item =>
            <Card bgr={item.bgr} onClick={() => onClick(item.key)}
                  key={item.key}>{item.title}</Card>)}
    </div>
}

export default memo(Container);
