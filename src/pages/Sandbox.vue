<template>
    <q-page
        class="img-card__gallery flex flex-center"
        padding
    >
        <image-card
            v-for="i in 10"
            :key="i"
            :src="randImg"
        />

        <image-modal
            v-model="modal"
            v-bind="detail"
        />
    </q-page>
</template>

<script>
import ImageCard from 'components/ImageCard';
import ImageModal from 'components/ImageModal';
import { getRandomPhoto/* , getRandomPhotoFaker */ } from 'src/services/photo';

export default {
    name: 'PageSandbox',

    data() {
        return {
            randImg: '',

            modal: true,
        };
    },

    computed: {
        detail() {
            return {
                src: this.randImg,
                title: 'Gambar Apik',
            };
        },
    },

    async mounted() {
        this.randImg = await getRandomPhoto();
        // console.log(await getRandomPhotoFaker());
    },

    components: {
        ImageCard, ImageModal,
    },
};
</script>

<style lang="scss">
.img-card__gallery {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
}
</style>
