<template>
    <header class="hero">
        <q-img
            :src="heroImage"
            alt="hero"
            height="100%"
        >
            <div
                class="hero__overlay"
                style="padding: 0"
            >
                <div class="hero__content__container">
                    <div class="hero__content">
                        <h1 class="hero__content__title">
                            Lorem.photos
                        </h1>
                        <h2 class="hero__content__subtitle">
                            Online Repository for your Design needs
                        </h2>
                        <q-card class="hero__content__searchbar">
                            <q-input
                                v-model="search"
                                type="search"
                                placeholder="Search your need here... (e.g. Mountain, Waterfall)"
                                borderless
                            >
                                <template v-slot:append>
                                    <q-icon name="search" />
                                </template>
                            </q-input>
                        </q-card>
                    </div>
                </div>
            </div>
            <template #loading>
                <q-skeleton
                    width="100%"
                    height="100%"
                    animation="blink"
                />
            </template>
        </q-img>
    </header>
</template>

<script>
import { getRandomPhoto } from 'src/services/photo';
import { dom } from 'quasar';

const { width, height } = dom;

export default {
    name: 'HeroTitle',

    data() {
        return {
            heroImage: '',
            search: null,
        };
    },

    async mounted() {
        const thisW = Math.round(width(this.$el));
        const thisH = Math.round(height(this.$el));
        this.heroImage = await getRandomPhoto(thisW, thisH);
    },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&amp;text=Lorem.photos');

.hero {
    height: 80vh;
    width: 100%;

    &__overlay {
        position: relative;
        width: 100%;
        height: 100%;
    }

    &__content {
        background-color: #0002;
        backdrop-filter: blur(5px);
        padding: 3rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &__container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        &__title {
            margin-block-start: 0;
            margin-block-end: 0;
            font-family: 'Montserrat', $typography-font-family;
            font-size: map-get($h2, size);
        }

        &__subtitle {
            margin-block-start: 0;
            font-size: map-get($h5, size);
        }

        &__searchbar {
            margin-block-end: .8rem;
            width: 60%;
            padding: 0 2em;
            border-radius: 10px;
            box-shadow: $shadow-12;
        }
    }
}
</style>
