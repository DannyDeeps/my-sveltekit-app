<script>
	import { Button, Col, Container, NavLink, Row } from "sveltestrap";
</script>

<Container md>
	<Row class="gy-5">
		<Col xs="12">
			<p class="fs-1 fw-bold">Get loans from £10k to £25k</p>			
			<p class="fs-2">See if your accepted without hurting your credit score!</p>
			<div class="fs-4">
				<strong>Choice</strong> - compare 100s of loans
			</div>
			
			<div class="fs-4">
				<strong>Fast</strong> - response in seconds
			</div>
			
			<div class="fs-4">
				<strong>No fuss</strong> - online approvals
			</div>
			
			<div class="mt-4">
				<Button href="/apply" size="lg" color="success" style="min-width: 300px;">Apply Now</Button>
			</div>
		</Col>
	</Row>
</Container>
