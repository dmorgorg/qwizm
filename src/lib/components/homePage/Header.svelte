<!-- homePage/Header.svelte -->
<header>
	<a href="/">qwizm.org</a>

	<nav>
		<ul>
			<li>
				<a href="/statics">statics</a>
			</li>
			<li>
				<a href="/strength">strength</a>
			</li>
			<li>
				<a href="/water">water</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		padding: 1rem;
		padding-right: 3rem;
		padding-left: 3rem;
		display: flex;
		justify-content: space-between;
	}
	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1.5rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	a,
	a:visited,
	a:active {
		color: grey;
		text-decoration: none;
	}
	a:hover {
		color: black;
	}
</style>
