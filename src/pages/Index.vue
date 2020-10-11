<template>
    <q-page class="column flex-start">
        <hero-title
            title="Lorem Distro"
            subtitle="Officially Lorem Distro Webstore"
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
                <!-- <image-card
                    v-for="i in collectionLength"
                    :key="i"
                    :src="imgExample"
                    :pro="Boolean(Math.round(Math.random()))"
                /> -->
                <image-card
                    v-for="(item, index) in collections"
                    :key="index"
                    v-bind="item"
                    :pro="Boolean(Math.round(Math.random()))"
                    :price="Math.round(Math.random() * 100)"
                />
            </q-infinite-scroll>
        </section>
    </q-page>
</template>

<script>
import HeroTitle from 'components/HeroTItle';
import ImageCard from 'components/ImageCard';
import { /* getRandomPhoto, */ getRandomPhotoFaker } from 'src/services/photo';

export default {
    name: 'PageIndex',

    data() {
        return {
            imgExample: '',
            collectionLength: 10,
            collections: [],
            offset: (document.querySelector('html').clientHeight - 200),
        };
    },

    methods: {
        // collectMore(index, done) {
        //     this.collectionLength += 10;
        //     done();
        // },
        async collectMore(index, done) {
            const collected = await getRandomPhotoFaker();

            this.collections.push(...collected);

            done();
        },
    },

    // async mounted() {
    //     this.imgExample = await getRandomPhoto(345);

    //     console.log(await getRandomPhotoFaker());
    // },

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
