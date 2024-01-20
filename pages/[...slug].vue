<template>
    <main>
        <ContentRenderer v-if="page?.body" :value="page"/>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout:'energy'
})
const route = useRoute()
const {data: page} = await useAsyncData(`page-${route.path}`, ()=>queryContent(route.path).findOne())
if (!page.value) {throw createError({statusCode:404, statusMessage:'Page not found lol'})}

</script>