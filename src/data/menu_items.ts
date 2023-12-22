export type ItemProps = {
    title: string, key: string, bgr: string, price?: number, children?: ItemProps[]
}

type DataProps = ItemProps[];

const cappuccinoColor = "#713802";

export const menu_items: DataProps = [{
    title: 'Кофе', key: 'coffee', bgr: '#442D25', children: [
        {
            title: 'Эспрессо', key: 'espresso', price: 100, bgr: '#0B0905'
        }, {
            title: 'Американо', key: 'americano', price: 150, bgr: '#442D25'
        }, {
            title: 'Капучино',
            key: 'cappuccino',
            bgr: cappuccinoColor,
            children: [
                {title: '250мл', key: '250', price: 200, bgr: cappuccinoColor,},
                {title: '350мл', key: '350', price: 300, bgr: cappuccinoColor,},
                {
                    title: '450мл',
                    key: '450',
                    price: 400, bgr: cappuccinoColor,
                }]
        }]
}];

