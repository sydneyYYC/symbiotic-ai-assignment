<script>
  let footerLinks = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Our Values", href: "/mission"},
    {name: "Contact Us", href: "/contact"},
  ];
</script>

<footer class="bg-black flex flex-col items-center text-white items-center">
  <img class="w-[34px] h-auto pt-4"src="/assets/symbiotic-logo.svg" alt="symbiotic AI small logo">
    <ul class="flex items-center w-screen justify-around py-2">
      {#each footerLinks as { name, href }}
      <a href={href} class="hover:underline"><li class="font-inter mx-4 my-2">{name}</li></a>
      {/each}
    </ul>
    <p class="pb-4 text-sm">&copy Symbiotic AI 2024</p>
</footer>