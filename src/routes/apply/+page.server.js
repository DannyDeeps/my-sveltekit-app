/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const form = await event.fetch('/api/forms/default').then(r => r.json());
	return { form };
}

// export const actions = {
// 	default: async ({ cookies, request }) => {
// 		const data = await request.formData();
// 		console.log(data);
// 	}
// };
