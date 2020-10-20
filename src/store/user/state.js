import { uid } from 'quasar';
import { randNumber } from 'src/utils';

export default function () {
    return {
        carts: [...Array(randNumber(10))].map(() => ({
            uid: uid(),
            amount: randNumber(10),
        })),
    };
}
