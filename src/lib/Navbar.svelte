<script>
	import ContactButton from "./ContactButton.svelte";

  let navLinks = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Our Team", href: "/team"},
  ];
</script>

<nav class="bg-black flex justify-between items-center">
  <div class="mx-4 my-2">
    <a href="#top"><img src="/assets/symbiotic-wordmark.svg" alt="Symbiotic AI logo"></a>
  </div>
  <ul class="flex text-white items-center">
    {#each navLinks as { name, href }}
    <a href={href} class="hover:underline"><li class="font-inter mx-4 my-2">{name}</li></a>
    {/each}
    <ContactButton />
  </ul>
</nav>