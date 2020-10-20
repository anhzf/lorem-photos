import { store } from 'src/store';

// interface cartItemObject {
//     uid: string;
//     amount?: number;
// }

// export default {
//     addItem(item: cartItemObject) {

//     },

//     findById(id: cartItemObject['uid']) {
//         store().state.user.
//     }
// };
export default {
    addItemToCart(itemObject, forceAdd = false) {
        if (!this.findByUid(itemObject)) { return store.commit('user/addItemToCart', itemObject); }

        if (forceAdd) { return this.addAmount(itemObject.uid, itemObject.amount); }

        throw Error('Item is already exist');
    },

    addAmount(uid, amount) {
        return store.commit('user/changeCartItemAmount', {
            uid,
            modifier: (currentAmount) => currentAmount + amount,
        });
    },

    findByUid(uid) {
        return store.state.user.carts.find((item) => item.uid === uid);
    },
};
