<script>
  export let imgSrc= "/"
  export let imgAlt = "placeholder alt"
  export let title = "company title here"
  export let name = "name here"
</script>

<div class="md:flex-row flex flex-col justify-between min-w-screen mb-[6rem]">
  <img class="h-[400px] w-[400px] bg-[#E1E1E1] self-start flex-none p-4" src={imgSrc} alt={imgAlt}>
  <div class="sm:self-center md:mt-0 mx-0 md:mx-[2rem] lg:mr-[4rem] mt-4 self-start ">
    <h5 class="md:text-4xl font-semibold text-3xl mb-2">{title}</h5>
    <p class="text-xl mb-4">{name}</p>
    <p class="max-w-[50ch] sm:max-w-[55ch]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quasi autem atque unde harum voluptatibus possimus laboriosam! Reprehenderit, placeat corrupti? Sed quasi autem atque unde harum voluptatibus possimus laboriosam! Reprehenderit, placeat corrupti?</p>
  </div>
</div>