<template>
	<Card>
		<CardHeader>
			<CardTitle>
				<ContentSlot :use="$slots.title" />
			</CardTitle>
			<CardDescription>
				<ContentSlot :use="$slots.description" />
			</CardDescription>
		</CardHeader>
		<CardContent>
			<ContentSlot :use="$slots.default"></ContentSlot>
		</CardContent>
		<CardFooter>
			<ContentSlot :use="$slots.footer" />
		</CardFooter>
	</Card>
</template>
