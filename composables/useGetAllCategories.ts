export const useGetAllCategories = async () => {
    return await useLazyAsyncData(
	'gettingCategories',
	() => {
		return queryContent(useRoute().path)
			.where({
				category: { $exists: true },
			})
			.only(['_path', 'category', '_dir'])
			.find();
	},
	{
		transform: (yee2): string[] => {
			return [
				'All',
				...new Set(
					yee2.map((item2) => {
						return item2.category;
					}),
				),
			];
		},
	},
);
}
