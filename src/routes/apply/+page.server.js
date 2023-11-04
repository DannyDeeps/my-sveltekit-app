import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const formId = event.url.searchParams.get('form');
	const stepNum = event.url.searchParams.get('step');

	const response = await event.fetch(`/api/form/${formId}/${stepNum}`);
	if (!response.ok) {
		throw error(500, 'API Call Failed');
	}

	const step = await response.json();
	console.log(step);

	return {
		step
	}
}

// export const actions = {
// 	default: async ({ cookies, request }) => {
// 		const data = await request.formData();
// 		console.log(data);
// 	}
// };
