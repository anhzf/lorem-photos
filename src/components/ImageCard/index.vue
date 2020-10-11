<template>
    <div class="img-card">
        <q-img :src="src" />
        <div class="img-card__description__overlay">
            <div class="img-card__description">
                <h6 class="img-card__description__title">
                    Mountain
                </h6>
                <span class="img-card__description__author">
                    John doe
                </span>
            </div>
        </div>
        <span class="img-card__label text-caption">PRO</span>
    </div>
</template>

<script>
export default {
    name: 'ImageCard',

    props: {
        src: {
            type: String,
            required: true,
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
    max-width: 345px;
    border-radius: 20px 20px 35px 35px;
    transition: .3s ease;
    &:hover {
        box-shadow: $shadow-12;
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
    }

    .q-img {
        height: 100%;
        border-radius: inherit;
    }
}
</style>
