<template>
    <header
        class="hero"
    >
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
                        <h1
                            class="hero__content__title"
                            @click="$router.push({name: 'PageIndex'})"
                        >
                            <!-- Lorem.photos -->
                            {{ title }}
                        </h1>
                        <h2 class="hero__content__subtitle">
                            <!-- Online Repository for your Design needs -->
                            {{ subtitle }}
                        </h2>
                        <q-card
                            tag="form"
                            class="hero__content__searchbar"
                            @submit.prevent="searchAction"
                        >
                            <q-input
                                v-model="search"
                                type="search"
                                placeholder="Search your need here... (e.g. T-Shirt, Jacket)"
                                borderless
                            >
                                <template v-slot:append>
                                    <q-btn
                                        icon="search"
                                        round
                                        flat
                                    />
                                </template>
                            </q-input>
                        </q-card>
                    </div>
                </div>
            </div>

            <hero-title-navigation />

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
import { dom, scroll } from 'quasar';
import HeroTitleNavigation from './navigation';

const { width, height } = dom;
const { setScrollPosition, getScrollTarget } = scroll;

export default {
    name: 'HeroTitle',

    props: {
        title: {
            type: String,
            default: 'Title here',
        },
        subtitle: {
            type: String,
            default: 'Subtitle here',
        },
    },

    data() {
        return {
            heroImage: '',
            search: null,
        };
    },

    methods: {
        searchAction() {
            this.$router.push({
                query: { q: this.search },
            }).then(() => {
                const el = document.getElementById('collections');
                const target = getScrollTarget(el);
                setScrollPosition(target, el.offsetTop, 200);
            });
        },
    },

    async mounted() {
        const thisW = Math.round(width(this.$el));
        const thisH = Math.round(height(this.$el));
        this.heroImage = await getRandomPhoto(thisW, thisH);
    },

    components: {
        HeroTitleNavigation,
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
            cursor: pointer;
            margin-block-start: 0;
            margin-block-end: 0;
            font-family: 'Montserrat', $typography-font-family;
            font-size: map-get($h2, size);
            line-height: map-get($h1, line-height);

            @media screen and (max-width: $breakpoint-xs) {
                font-size: map-get($h4, size);
                line-height: map-get($h3, line-height);
            }
        }

        &__subtitle {
            margin-block-start: 0;
            font-size: map-get($h5, size);
            line-height: map-get($h5, line-height);

            @media screen and (max-width: $breakpoint-xs) {
                font-size: map-get($body1, size);
                line-height: map-get($h6, line-height);
            }
        }

        &__searchbar {
            margin-block-end: .8rem;
            width: 60%;
            min-width: 300px;
            padding: 0 2em;
            border-radius: 10px;
            box-shadow: $shadow-12;
        }
    }

    &__nav {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        padding: 0 2rem;
        display: flex;
        justify-content: flex-end;
        margin-block-start: 1.5rem;
        margin-block-end: 1.5rem;
    }
}
</style>
