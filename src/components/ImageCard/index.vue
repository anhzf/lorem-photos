<template>
    <div class="img-card">
        <q-img :src="url" />
        <div class="img-card__description__overlay">
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

            <div class="img-card__actions">
                <q-btn
                    class="img-card__add-to-cart shadow-10"
                    icon="add"
                    size="xl"
                    rounded
                    color="black"
                    text-color="white"
                >
                    <small>Add to Cart</small>
                    <q-tooltip>add to cart</q-tooltip>
                </q-btn>
            </div>
        </div>
        <span
            v-if="pro"
            class="img-card__label text-caption"
        >PROMO</span>
    </div>
</template>

<script>
export default {
    name: 'ImageCard',

    props: {
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
    },
};
</script>

<style lang="scss">
.img-card {
    $_comp: &;
    cursor: pointer;
    position: relative;
    box-shadow: $shadow-4;
    width: 50%;
    height: 60vh;
    min-width: 300px;
    max-width: 345px;
    border-radius: 20px 20px 35px 35px;
    transition: .3s ease;
    &:hover {
        box-shadow: $shadow-12;

        #{$_comp}__description {
            &__overlay {
                height: 100%;
                justify-content: flex-start;
            }

            &__title {
                font-size: map-get($h5, size);
            }

            &__price {
                font-size: map-get($body1, size);
            }
        }

        #{$_comp}__actions {
            display: block;
        }
    }

    &__label {
        position: absolute;
        top: 0;
        left: 0;
        padding: .4em 1em;
        background-color: #ffdd40;
        border-radius: 20px 0 20px 0;
    }

    &__description {
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__overlay {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 45%;
            background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.5) 58.33%,
                rgba(0, 0, 0, 0.55) 100%
            );
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            border-radius: 35px 35px;
            transition: .2s ease;
        }

        &__title {
            margin: 0;
            line-height: map-get($h6, line-height);
            font-family: $typography-font-family;
            font-size: map-get($h6, size);
            font-weight: map-get($h6, weight);
            color: #fff;
            letter-spacing: map-get($h6, letter-spacing);
        }

        &__author {
            color: #fff;
        }

        &__price {
            padding: .1em 1em;
            color: #333;
            font-size: map-get($body2, size);
            background-color: #fff;
            border-radius: 1em;
            box-shadow: $shadow-8;
        }
    }

    &__actions {
        position: absolute;
        display: none;
        top: 50%;
        bottom: 50%;
    }

    .q-img {
        height: 100%;
        border-radius: inherit;
    }
}
</style>
