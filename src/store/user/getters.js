export function cartTotal(state) {
    return state.carts.reduce((total, curr) => total + (curr.amount ?? 1), 0);
}
