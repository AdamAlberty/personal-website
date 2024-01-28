import { format } from 'date-fns';

export const formatDate = (datestr: string) => {
	try {
		return format(new Date(datestr), 'M/dd/yyyy');
	} catch (err) {
		return '--/--/----';
	}
};
