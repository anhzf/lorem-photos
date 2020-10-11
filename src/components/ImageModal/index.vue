<template>
    <q-dialog :value="value">
        <!-- <div class="img-modal__overlay"> -->
        <!-- <q-dialog> -->
        <article class="img-modal">
            <q-img
                :src="src"
                width="200px"
            />
        </article>
        <!-- </q-dialog> -->
        <!-- </div> -->
    </q-dialog>
</template>

<script>
export default {
    name: 'ImageModal',

    props: {
        value: {
            type: Boolean,
            required: true,
        },
        src: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.img-modal {
    box-shadow: $shadow-12;

    /* &__overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #0003;
        backdrop-filter: blur(1.5px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    } */
}
</style>
