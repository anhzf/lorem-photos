<template>
    <q-page class="column flex-start">
        <hero-title
            title="Lorem.photos"
            subtitle="Online Repository for your Design needs"
        />

        <section
            id="collections"
            class="img-card__gallery__section q-layout-padding"
        >
            <h2 class="img-card__gallery__section__title">
                Explore our Collections
            </h2>
            <q-infinite-scroll
                class="img-card__gallery"
                @load="collectMore"
                :offset="600"
            >
                <image-card
                    v-for="item in collections"
                    :key="item.uid"
                    v-bind="item"
                    @add-to-cart="addCart"
                />
            </q-infinite-scroll>
        </section>
    </q-page>
</template>

<script>
import HeroTitle from 'components/HeroTItle';
import ImageCard from 'components/ImageCard';
import { getRandomPhoto } from 'src/services/photo';
import { randNumber } from 'src/utils';
import cartService from 'src/services/cart';
import { uid } from 'quasar';

export default {
    name: 'PageIndex',

    data() {
        return {
            collections: [],
            offset: (document.querySelector('html').clientHeight - 200),
        };
    },

    methods: {
        collectMore(index, done) {
            this.collectionFaker()
                .then((collected) => {
                    const collections = [...Array(10)].map(() => collected);

                    this.collections.push(...collections);
                    done();
                });
        },

        addCart(id) {
            cartService.addItemToCart({
                uid: id,
                amount: randNumber(100),
            });
        },

        async collectionFaker() {
            return {
                id: uid(),
                url: await getRandomPhoto(345),
                pro: Boolean(randNumber()),
            };
        },
    },

    components: {
        HeroTitle, ImageCard,
    },
};
</script>

<style lang="scss">
.img-card__gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;

    &__section {
        display: flex;
        flex-direction: column;
        width: 100%;

        &__title {
            @media screen and (max-width: $breakpoint-xs) {
                font-size: map-get($h4, size);
            }
        }
    }
}
</style>
