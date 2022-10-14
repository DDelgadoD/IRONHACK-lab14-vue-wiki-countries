<template>
  
    <figure class="media-left">
        <p class="image is-64x64">
            <img :src="'https://flagpedia.net/data/flags/icon/72x54/' + code +'.png'" />
        </p>
    </figure>
    <div class="media-content">
        <div class="content">
            <p>
                <strong>{{name}}</strong>
            </p>
        </div>
    </div>
 
</template>
<script setup>
import { defineProps} from 'vue';

const props = defineProps(
    {
    code: String,
    name: String
    }
);

</script>
<style scoped>
</style>