export function addItemToCart(state, itemObject) {
    state.carts.push(itemObject);
}

export function changeCartItemAmount(state, ops) {
    // Using Array.some() to enable break inside loop
    state.carts.some((item, i) => {
        if (ops.uid === item.uid) {
            // So, in this case, modifier should return number
            state.carts[i].amount = ops.modifier(item.amount);
            return true;
        }
        return false;
    });
}
