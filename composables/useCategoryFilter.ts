import type { ParsedContent } from '@nuxt/content';

export const useCategoryFilter = (
	allCategories: string[] | null,
	value:
		| Pick<
				ParsedContent,
				'title' | '_dir' | '_id' | 'tags' | '_path' | 'category'
		  >[]
		| undefined,
) => {
	if (allCategories !== null) {
		return [
			'All',
			...allCategories.filter((entry) =>
				value?.map((item) => item.category).includes(entry),
			),
		];
	}
};
