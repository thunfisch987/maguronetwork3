import type { ParsedContent } from '@nuxt/content';

export const useTagFilter =
	(
		item2: Ref<Pick<
			ParsedContent,
			'title' | '_dir' | '_id' | 'tags' | '_path' | 'category'
		>>,
	) => {
		const currentTag = useState<string>('currentTag');
		console.log(currentTag.value)
		console.log(item2.value.tags)
		return (
			(item2.value.tags &&
				currentTag.value !== 'All' &&
				item2.value.tags.includes(currentTag)) ||
			currentTag.value === 'All'
		);
	};
