import { getSnapshot, onSnapshot } from 'mobx-state-tree';
import { reaction } from 'mobx';
import { WishListItemModel, WishListModel } from './WishList';

it('can create a instance of a model', () => {
    const item = WishListItemModel.create({
        name: 'React Native - JH',
        price: 28.73
    });

    expect(item.price).toBe(28.73);
    expect(item.image).toBe('');
});

it('can create a wishlist', () => {
    const list = WishListModel.create({
        items: [
            {
                name: 'React - JH',
                price: 27.43
            }
        ]
    });

    expect(list.items.length).toBe(1);
    expect(list.items[0].price).toBe(27.43);
});

it('can add new items', () => {
    const list = WishListModel.create();

    const states: any = [];
    onSnapshot(list, snapshot => {
        states.push(snapshot);
    });

    list.add(
        WishListItemModel.create({
            name: 'HOON',
            price: 20
        })
    );

    expect(getSnapshot(list)).toEqual({
        items: [
            {
                name: 'HOON',
                price: 20,
                image: ''
            }
        ]
    });
    expect(list.items.length).toBe(1);
    expect(list.items[0].name).toBe('HOON');
    list.items[0].changePrice(10);
    list.items[0].changeName('Book of HOON');
    expect(list.items[0].name).toBe('Book of HOON');
    list.items[0].changeName('Toy of HOON');
    expect(states).toMatchSnapshot();
});

it('can calculate the total price of a wishlist', () => {
    const list = WishListModel.create({
        items: [
            {
                name: 'Chest',
                price: 7.35
            },
            {
                name: 'Book of HOON',
                price: 349.95
            }
        ]
    });

    let changed: number = 0;
    reaction(() => list.totalPrice, () => changed++);

    expect(list.totalPrice).toBe(357.3);
    expect(changed).toBe(0);
    console.log(list.totalPrice);
    list.items[0].changeName('Test');
    expect(changed).toBe(0);
    list.items[0].changePrice(10);
    expect(changed).toBe(1);
});

