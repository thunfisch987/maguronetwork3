export default function () {
	return useState<boolean>('mobileMenuOpen', () => false);
}
