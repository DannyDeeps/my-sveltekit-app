import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const formId = event.url.searchParams.get('form') || 'default';
	const stepNum = event.url.searchParams.get('step') || 1;

	const response = await event.fetch(`/api/form/${formId}/${stepNum}`);
	if (!response.ok) {
		throw error(500, 'API Call Failed');
	}

	const step = await response.json();

	return { step };
}
