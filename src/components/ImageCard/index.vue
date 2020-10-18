<template>
    <div
        class="img-card"
        @click="navigate"
    >
        <q-img :src="url" />

        <div class="img-card__description__overlay" />
        <div class="img-card__description">
            <h6 class="img-card__description__title">
                {{ title }}
            </h6>
            <!-- <span class="img-card__description__author">
                    John doe
                </span> -->
            <span class="img-card__description__price">
                Rp {{ price }}
            </span>
        </div>

        <div class="img-card__add-to-cart__container">
            <q-btn
                class="img-card__add-to-cart__btn shadow-10"
                icon="add"
                size="xl"
                rounded
                color="black"
                text-color="white"
                ref="addToCartBtn"
                @click.stop="$emit('add-to-cart', id)"
            >
                <small>Add to Cart</small>
                <q-tooltip>add to cart</q-tooltip>
            </q-btn>
        </div>

        <div class="img-card__actions" />

        <span
            class="img-card__label text-caption"
            v-if="pro"
        >PROMO</span>

        <q-tooltip content-class="text-body2">
            Click to see detail
        </q-tooltip>
    </div>
</template>

<script>
import './style.scss';

export default {
    name: 'ImageCard',

    props: {
        // eslint-disable-next-line vue/require-default-prop
        id: {
            type: [String, Number],
            required: false,
        },

        url: {
            type: String,
            required: true,
        },

        title: {
            type: String,
            default: 'Mountain',
        },

        price: {
            type: Number,
            default: 0,
        },

        pro: {
            type: Boolean,
            default: false,
        },

        to: {
            type: [String, Object],
            default: null,
        },
    },

    methods: {
        navigate() {
            if (this.to) return this.$router.push(this.to);
            return false;
        },
    },
};
</script>
