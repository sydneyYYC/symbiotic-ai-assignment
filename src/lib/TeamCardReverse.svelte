<script>
  export let revImgSrc= "/"
  export let revImgAlt = "placeholder alt"
  export let revTitle = "company title here"
  export let revName = "name here"
</script>

<div class=" md:flex-row flex flex-col-reverse justify-between min-w-screen mb-[6rem]">
  <div class="sm:self-center md:mt-0 md:mx-[2rem] lg:mr-[4rem] mx-0 self-start mt-4">
    <h5 class="md:text-4xl font-semibold text-3xl mb-2">{revTitle}</h5>
    <p class="text-xl mb-4">{revName}</p>
    <p class="max-w-[50ch] sm:max-w-[55ch] mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quasi autem atque unde harum voluptatibus possimus laboriosam! Reprehenderit, placeat corrupti? Sed quasi autem atque unde harum voluptatibus possimus laboriosam! Reprehenderit, placeat corrupti?</p>
  </div>
  <img class="h-[400px] w-[400px] bg-[#E1E1E1] self-start flex-none" src={revImgSrc} alt={revImgAlt}>
</div>