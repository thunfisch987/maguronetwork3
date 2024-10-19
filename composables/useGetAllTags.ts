export const useGetAllTags = async () => {
    return await useLazyAsyncData(
	'gettingTags',
	() => {
		return queryContent(useRoute().path)
			.where({ tags: { $exists: true } })
			.only(['tags'])
			.find();
	},
	{
		transform: (yee) => {
			return [
				'All',
				...new Set(
					yee
						.flatMap((item: { tags: string[] }) => {
							return item.tags;
						}),
				),
			];
		},
	},
);
}
