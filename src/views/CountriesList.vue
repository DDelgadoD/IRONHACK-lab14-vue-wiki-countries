<template>
    <!-- container wrapper div -->
    <div class="container" style="height: calc(100vh - 52px);">
        <!-- columns wrapper div -->
        <div class="columns mt-0 " style="height: 100%;">
            <!-- Countries List (column) -->
            <div class="column is-4" style="overflow: auto">
                <div v-if = "isLoaded" v-for="(country, index) in countries" >
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
    import { ref, onMounted } from 'vue';
    import ListElement from '../components/ListElement.vue'
    import { getCountries } from '../api'
    const isLoaded = ref(false);
    const countries = ref(undefined);

    const loadList = async () => {
        countries.value = await getCountries();
        isLoaded.value = true
    }

    onMounted(async () => {
        loadList()
}   )


</script>

<style scoped>
</style>