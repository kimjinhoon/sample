import { types, getParent, destroy, Instance } from 'mobx-state-tree';
import { flow } from 'mobx';

export const WishListItemModel = types.model("WishListItem", {
    name: types.string,
    price: types.number,
    image: types.optional(types.string, ''),
})
.actions(self => ({
    changeName(newName: string) {
        self.name = newName;
    },
    changePrice(newPrice: number) {
        self.price = newPrice;
    },
    changeImage(newImage: string) {
        self.image = newImage;
    },
    remove() {
        getParent(self, 2).remove(self);
    }
}));

export const WishListModel = types.model("WishList", {
    items: types.optional(types.array(WishListItemModel), [])
})
.actions(self => ({
    add(item: Instance<typeof WishListItemModel>) {
        self.items.push(item);
    },
    remove(item: Instance<typeof WishListItemModel>) {
        destroy(item);
    }
}))
.views(self => ({
    get totalPrice() {
        return self.items.reduce((sum, entry) => sum + entry.price, 0);
    }
}));

const UserModel = types.model("User", {
    id: types.string,
    name: types.string,
    gender: types.enumeration("gender", ["m", "f"]),
    wishList: types.optional(WishListModel, {}),
})
.actions(self => ({
    getSuggestions: flow(function*() {
        const response: any = yield window.fetch(
            `http://localhost:3001/suggestions_${self.gender}`
        );
        const suggestions: any = yield response.json();
        self.wishList.items.push(...suggestions);
    })
}))
;

export const RootModel = types.model("Group", {
    users: types.array(UserModel)
});

export type Root = Instance<typeof RootModel>
export type User = Instance<typeof UserModel>
export type WishList = Instance<typeof WishListModel>
export type WishListItem = Instance<typeof WishListItemModel>
