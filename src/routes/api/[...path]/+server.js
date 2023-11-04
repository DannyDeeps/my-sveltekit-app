import { json } from '@sveltejs/kit';
import { env } from "$env/dynamic/private";

/** @type {import("./$types").RequestHandler} */
export async function GET({ params }) {
  let data = {};

  console.log(`${env.API_HOST}/${params.path}`);

  const response = await fetch(`${env.API_HOST}/${params.path}`);
  if (response.ok) {
    data = await response.json();
  }

  return json(data);
}