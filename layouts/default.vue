<template>
	<div class="maingrid">
		<MaguroNav />
		<slot />
		<footer />
	</div>
</template>

<script setup lang="ts"></script>

<style>
.maingrid {
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: auto, 1fr, auto;
}
</style>
