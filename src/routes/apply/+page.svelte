<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

{@html data.step.style}

<div class="container">
	<div class="row">
		<div class="col-12">
			{@html data.step.html}
		</div>
	</div>
</div>