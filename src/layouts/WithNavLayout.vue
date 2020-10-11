<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar class="bg-white text-black q-py-md">
                <q-btn
                    icon="arrow_back"
                    round
                    flat
                    @click="$router.back()"
                />
                <q-toolbar-title>
                    Cart
                    <!-- {{ $route }} -->
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: 'WithNavLayout',
};
</script>
