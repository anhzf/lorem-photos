<template>
    <nav class="hero__nav">
        <q-btn
            icon="local_mall"
            color="white"
            text-color="#333"
            round
            class="q-ml-md"
            :to="{name: 'PageCart'}"
        >
            <q-badge
                floating
                color="info"
            >
                {{ cartTotal }}
            </q-badge>
        </q-btn>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'HeroTitleNavigation',

    computed: {
        ...mapGetters('user', ['cartTotal']),
    },
};
</script>
