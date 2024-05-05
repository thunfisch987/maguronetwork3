<template>
	<NuxtLoadingIndicator />
	<div class="maingrid">
		<MaguroNav />
		<footer />
	</div>	<!-- <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" /> -->
		<NuxtPage />
</template>

<script setup lang="ts"></script>

<style>
.maingrid {
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: auto, 1fr, auto;
}
/* .page-enter-active, */
/* .page-leave-active { */
/* 	transition: all 0.4s; */
/* } */
/* .page-enter-from, */
/* .page-leave-to { */
/* 	opacity: 0; */
/* 	filter: blur(1rem); */
/* } */
</style>
