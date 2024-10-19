import type { QueryBuilderWhere } from '@nuxt/content';

export const useGetOverview = async () => {
	const groupName = await queryContent(useRoute().path)
		.where({ _path: { $contains: '_dir' } })
		.only(['title', '_dir'])
		.find();
	const currentTag = useState<string>('currentTag');
	const currentCategory = useState<string>('currentCategory');

	return await useLazyAsyncData(
		'overvue',
		() => {
			let query: QueryBuilderWhere = { $not: { navigation: false } };
			if (currentTag.value === 'All' && currentCategory.value !== 'All') {
				query = {
					$and: [
						{ $not: { navigation: false } },
						{ category: { $exists: true } },
						{ category: currentCategory.value },
					],
				};
			}
			if (currentCategory.value === 'All' && currentTag.value !== 'All') {
				query = {
					$and: [
						{ $not: { navigation: false } },
						{ tags: { $exists: true } },
						{ tags: { $contains: [currentTag.value] } },
					],
				};
			}
			if (currentTag.value !== 'All' && currentCategory.value !== 'All') {
				query = {
					$and: [
						{ $not: { navigation: false } },
						{ category: { $exists: true } },
						{ category: currentCategory.value },
						{ tags: { $exists: true } },
						{ tags: { $contains: [currentTag.value] } },
					],
				};
			}
			return queryContent(useRoute().path)
				.where(query)
				.only(['title', '_dir', '_id', 'tags', '_path', 'category'])
				.find();
		},
		{
			watch: [currentCategory, currentTag],
			transform: (yoo) => {
				return Object.groupBy(
					yoo,
					({ _dir }) =>
						groupName.filter((entry) => entry._dir === _dir)[0]
							.title ?? 'ERROR',
				);
			},
		},
	);
};
