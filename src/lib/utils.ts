export const formatDate = (str: string) => {
	try {
		return new Date().toLocaleDateString('en');
	} catch (err) {
		return '--/--/----';
	}
};
