<template>
    <q-card
        class="cart-item"
    >
        <q-img
            :src="url"
            height="200px"
        />

        <q-card-section>
            <h5 class="cart-item__title">
                {{ title }}
            </h5>
            <span>
                Rp 100
            </span>
        </q-card-section>

        <q-card-actions>
            <q-btn-group flat>
                <q-btn
                    icon="remove"
                    @click="substractQty"
                />

                <q-input
                    placeholder="qty"
                    v-model.number="qty"
                    input-class="text-center"
                    dense
                    outlined
                />

                <q-btn
                    icon="add"
                    @click="addQty"
                />
            </q-btn-group>
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
    name: 'CartItem',

    props: {
        title: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        qty: {
            type: Number,
            default: 0,
        },
    },

    methods: {
        addQty() {
            this.$emit('update:qty', this.qty + 1);
        },
        substractQty() {
            this.$emit('update:qty', this.qty - 1);
        },
    },
};
</script>

<style lang="scss">
.cart-item {
    width: 250px;

    &__list {
        position: relative;
        padding: map-get($space-md, y) map-get($space-xl, x);
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: baseline;
        row-gap: map-get($space-lg, y);
        column-gap: map-get($space-lg, x);
    }

    &__title {
        margin: 0;
        overflow-x: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    &__cart-item__actions {
        padding-bottom: 0;
    }
}
</style>
