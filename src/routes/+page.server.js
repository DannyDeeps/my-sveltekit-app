/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const response = await fetch('http://localhost:3000/records');
	const records = await response.json();

	return {
		records
	};
}
