<template>
    <q-page
        class="row"
        padding
    >
        <div class="cart-item__list col-grow">
            <cart-item
                v-for="(item, index) in carts"
                :key="index"
                v-bind="item"
                @update:qty="item.qty = $event"
            />
        </div>

        <transition
            appear
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideInDown"
        >
            <q-card
                ref="cartPagefooter"
                class="fixed-bottom shadow-24"
            >
                <div class="flex items-stretch">
                    <q-btn
                        icon="delete"
                        color="red"
                        flat
                        padding="lg"
                        class="q-ml-sm"
                    />
                    <q-space />
                    <q-card-section>
                        <span
                            class="text-h6 text-weight-regular q-mx-lg"
                        >
                            <small class="text-caption text-grey-7">total</small>
                            Rp 0
                        </span>
                    </q-card-section>
                    <template v-if="true">
                        <q-separator vertical />
                        <q-btn
                            flat
                            color="positive"
                            class="q-px-sm"
                        >
                            Proceed Transaction
                            <q-icon name="keyboard_arrow_right" />
                        </q-btn>
                    </template>
                </div>
            </q-card>
        </transition>
    </q-page>
</template>

<script>
import { getRandomPhotoFaker } from 'src/services/photo';
import CartItem from './CartItem';

export default {
    name: 'PageCart',

    data() {
        return {
            carts: [],
        };
    },

    methods: {
        async collect() {
            const photoProps = { width: 300, height: 200 };
            const collected = await getRandomPhotoFaker(photoProps, 5);

            collected.forEach((item) => {
                this.carts.push({
                    ...item,
                    qty: Math.round(Math.random() * 10),
                });
            });
        },
    },

    async mounted() {
        this.collect();
    },

    components: {
        CartItem,
    },
};
</script>

<style lang="scss">
.cart-total-card {
    position: sticky;
    top: 12vh;
    width: 100%;
}
</style>
