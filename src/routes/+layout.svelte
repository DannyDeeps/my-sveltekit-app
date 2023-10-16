<script>
	import '../app.scss';

	import {
		Collapse,
		Navbar,
		Nav,
		NavbarBrand,
		NavbarToggler,
		NavItem,
		NavLink
	} from 'sveltestrap';

	let isOpen = false;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}
</script>

<Navbar container="md" class="bg-body-tertiary" expand="md">
	<NavbarBrand href="/">Get Money</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)}/>
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav navbar>
			<NavItem>
				<NavLink href="/apply">Apply Now</NavLink>
			</NavItem>
		</Nav>
	</Collapse>
</Navbar>

<slot />