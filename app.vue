<template>
	<div>
		<VitePwaManifest />
		<NuxtLoadingIndicator :throttle="0" />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
