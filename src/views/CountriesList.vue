<template>
    <!-- container wrapper div -->
    <div class="container" style="height: calc(100vh - 52px);">
        <!-- columns wrapper div -->
        <div class="columns mt-0 " style="height: 100%;">
            <!-- Countries List (column) -->
            <div class="column is-4" style="overflow: auto">
                <div v-for="(country, index) in countries" >
                    <router-link :to="{name:'details', params:{code:country.alpha3Code}}" class="media is-clickable">
                        <ListElement :name="country.name.official" :code="country.alpha2Code.toLowerCase()" />
                    </router-link>
                </div>
            </div>
            <router-view />
        </div>
    </div>

</template>

<script setup>
    import ListElement from '../components/ListElement.vue'
    import countries from '../assets/countries.json';
</script>

<style scoped>
</style>