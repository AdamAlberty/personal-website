export const formatDate = (datestr: string) => {
	try {
		return new Date(datestr).toLocaleDateString('en');
	} catch (err) {
		return '--/--/----';
	}
};
