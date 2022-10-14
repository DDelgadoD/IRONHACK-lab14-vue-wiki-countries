<template>
    <div class="column is-8">
        <section class="section" v-if="!isLoading">
            <figure class="image is-128x128">
                <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`">
            </figure>
            <div class="title">{{country.name.official}}</div>
            <table class="table is-fullwidth">
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{{country.capital[0]}}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{{country.area}} km <sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <div v-if="borders.length == 0">None</div>
                            <ul v-else v-for="(border, index) in borders">
                                <li>
                                    <router-link :to="{name:'details', params:{code:border.alpha3Code}}"
                                        class="media is-clickable">
                                        {{border.name.official}}
                                    </router-link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script setup>
import { getCountry } from '../api'
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router'

// route nos da la informacion de la ruta
const route = useRoute();

const country = ref(undefined);
const borders = ref(undefined);
const isLoading = ref(true);

const loadDetails = async () => {
    country.value = await getCountry(route.params.code);
    borders.value = country.value.borders

    if (borders.value.length > 0) {
        borders.value = await Promise.all(country.value.borders.map(async (border) => await getCountry(border)))
    }

    isLoading.value = false;
}

onMounted(async () => {
    await loadDetails()
})

// Observa una variable, en esta caso el route.params.id y cuando cambia ejecuta una funcion
// lo usaremos cuando tengamos una url con parametros y cambie el valor para actualizar los datos
watch(async () => route.params.code, async newValue => {
    isLoading.value = true;
    await loadDetails()
});

</script>

<style scoped>

</style>