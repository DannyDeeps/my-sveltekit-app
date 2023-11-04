<script>
	import Input from '$lib/components/form/fields/Input.svelte';
	import Select from '$lib/components/form/fields/Select.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const stepNum = 0;
	const step = data.form[0].steps[stepNum];
</script>

<div class="form-wrapper">
	<div class="container py-5">
		<div class="row">
			<div class="col-12">
				<div class="center">
					{#if stepNum > 0}
						<button form="app" type="submit" class="btn btn-lg btn-secondary rounded-circle me-4">
							<i class="bi bi-arrow-left" />
						</button>
					{/if}

					<div class="fs-2 fw-bold text-center">
						{step.name}
					</div>
				</div>
			</div>

			<div class="col-12">
				<form id="app" class="form-wrapper" method="POST">
					<div class="row">
						{#each step.fields as field}
							<div class="col-12 col-sm-{field.size}">
								{#if field.type === 'select'}
									<Select {field} />
								{:else}
									<Input {field} />
								{/if}
							</div>
						{/each}
					</div>
				</form>
			</div>

			<div class="col-12">
				<div class="text-end mt-3">
					<button form="app" type="submit" class="btn btn-lg btn-success rounded-pill">
						Proceed <i class="bi bi-arrow-right" />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.form-wrapper {
		max-width: 524px;
		margin: auto;
	}
</style>
