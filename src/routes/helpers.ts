export function formateDate(date: string) {
	if (!date) return '';

	const dateObject = new Date(date);
	const monthName = dateObject.toLocaleString('default', { month: 'short' });
	const formattedDate = `${monthName + ' ' + dateObject.getFullYear()}`;
	return formattedDate;
}

export function truncate(str: string, num: number) {
	if (!str) return '';

	if (str.length <= num) {
		return str;
	}
	return str.slice(0, num) + '...';
}
