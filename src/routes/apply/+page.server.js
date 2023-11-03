/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const apiHost = process.env.API_HOST;
	
	const form = await fetch(`${apiHost}/forms/default`).then(r => r.json());

	return {
		form
	};
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		console.log(data);
	}
};
