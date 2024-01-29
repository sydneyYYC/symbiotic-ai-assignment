<script>
	import ContactButton from "./ContactButton.svelte";
  import { onMount } from 'svelte';

  let navLinks = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Our Values", href: "/mission"},
  ];

  // mobile nav
  
  // the onMount prevents the JS from loading until the DOM is loaded fully (defer but in svelte)
  onMount(() => {
    const navButton = document.querySelector("#menu-button"); 
    const navContainer = document.querySelector("#links");
    const siteHeader = document.querySelector("#nav-bar");
    
    // // Show nav menu on button click
    navButton.addEventListener("click", () => {
      navContainer.classList.toggle("hidden");
    });

  });
</script>

<nav id="nav-bar"class="top-nav">
  <div class="icon">
    <a href="/"><img src="/assets/symbiotic-wordmark.svg" alt="Symbiotic AI logo"></a>
  </div>
  <!-- this is the menu button -->
  <button id="menu-button"class="menu sm:hidden">
    <!-- inline SVG for hamburger menu -->
      <svg id="hamburger-menu" width="33" height="33" viewBox="0 0 33 33"     xmlns="http://www.w3.org/2000/svg" >
        <path d="M4.5 10.6855H28.5C29.604 10.6855 30.5 9.78955 30.5 8.68555C30.5 7.58155 29.604 6.68555 28.5 6.68555H4.5C3.396 6.68555 2.5 7.58155 2.5 8.68555C2.5 9.78955 3.396 10.6855 4.5 10.6855ZM28.5 14.6855H4.5C3.396 14.6855 2.5 15.5815 2.5 16.6855C2.5 17.7895 3.396 18.6855 4.5 18.6855H28.5C29.604 18.6855 30.5 17.7895 30.5 16.6855C30.5 15.5815 29.604 14.6855 28.5 14.6855ZM28.5 22.6855H4.5C3.396 22.6855 2.5 23.5815 2.5 24.6855C2.5 25.7895 3.396 26.6855 4.5 26.6855H28.5C29.604 26.6855 30.5 25.7895 30.5 24.6855C30.5 23.5815 29.604 22.6855 28.5 22.6855Z" />
      </svg>
  </button>
  <ul id="links" class="text-white hidden min-w-screen ml-4 text-lg mb-2">
    {#each navLinks as { name, href }}
    <a href={href} class="hover:underline"><li class="font-inter mx-4 my-2">{name}</li></a>
    {/each}
    <ContactButton />
  </ul>
</nav>

<!-- vanilla css to target mobile nav links-->
<style>
    #nav-bar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  } 

  .top-nav {
    background-color: #202020;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    margin: 1rem 2rem;
    max-width: max-content;
  }

  .hidden {
    display: none;
  }

  .menu {
    color: white;
    align-self: flex-end;
    position: absolute;
    margin-top: 0.5rem;
    margin-right: 2rem;
    padding: 0.5rem;
    border-radius: 30px;
  }

  /* changing the menu button color in mobile */
  #hamburger-menu {
    fill: white;
  }

  #hamburger-menu:hover {
    fill: #329CFE;
  }

  @media (min-width: 675px) { 
    #links {
    display: flex;
    color: white;
    align-items: center;
  }

  #nav-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
  } 

  .menu {
    display:hidden;
  }
  }
</style>