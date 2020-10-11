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
                {{ Math.round(Math.random() * 10) }}
            </q-badge>
        </q-btn>
    </nav>
</template>

<script>
export default {
    name: 'HeroTitleNavigation',
};
</script>
