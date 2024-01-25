<script>
  import "../app.css";
	import Footer from "../lib/Footer.svelte";
  import Navbar from "../lib/Navbar.svelte";
</script>

<Navbar />
<!-- css for sticky footer -->
<main class="flex flex-col h-screen justify-between">
  <slot />
  <div class="justify-self-end">
    <Footer />
  </div>
</main>