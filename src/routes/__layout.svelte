<script>
	import Header from '$lib/components/homePage/Header.svelte';
	import Footer from '$lib/components/homePage/Footer.svelte';
    // not a web standard but included in Vite build tools
     import '$lib/styles/styles.scss';
</script>

<div class="container">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>

	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: space-between;
        text-align: center;
	}
</style>