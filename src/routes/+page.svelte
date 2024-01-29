<script>
	import ContactButtonWhite from "../lib/ContactButtonWhite.svelte";
	import TeamCard from "../lib/TeamCard.svelte";
	import TeamCardReverse from "../lib/TeamCardReverse.svelte";
	
	// data for the team section
const arjunData = 
	{imgSrc: "/assets/images/profile.svg",
	imgAlt: "Mr. Arjun Puri",
	title: "Chief Executive Officer",
	name: "Mr. Arjun Puri"};

	const emmaData = 
	{imgSrc: "/assets/images/profile.svg",
	imgAlt: "Ms. Emma Bogner",
	title: "Product Manager",
	name: "Ms. Emma Bogner"};

	const joonData = {
		revImgSrc: "/assets/images/profile.svg",
		revImgAlt: "Dr. Joon Lee",
		revTitle: "Chief Technology Officer",
		revName: "Dr. Joon Lee"
	}
</script>

<main class="">
	<!-- first section including text and images-->
	<section class="sm:mx-6 md:justify-between md:mx-[5rem] mx-6 flex flex-wrap mt-10 justify-items-stretch">
		<section class="md:w-[50%] h-auto self-start leading-10">
			<h3 class=" sm:text-5xl text-4xl md:text-6xl block my-4 font-semibold">We turn big data into better health.</h3>
			<p class="text-xl max-w-[50ch] block my-6">Here at Symbiotic AI we are harnessing the potential of artificial intelligence to empower clinicians and patients making healthcare decisions.</p>
			<a href="/about" class="block max-w-max"><p class="my-6 bg-blue max-w-max px-2 py-[0.1rem] text-white font-semibold text-md hover:bg-darkblue">Discover More</p></a>
		</section>
		<!-- overlapping images -->
		<section class="md:w-[50%] flex w-screen justify-between h-auto my-4 md:grid grid-cols-4 grid-rows-4 bg-contain">
			<img class="sm:col-span-full md:w-[442px] md:h-[365px] w-full h-fauto bg-contain z-10  col-span-3 row-start-1 col-start-1 row-span-3" src="/assets/images/thirdman.jpg" alt="placeholder">
			<img class="sm:col-start-1 md:col-start-3 md:w-[288px] md:h-[247px] bg-contain w-[0] h-auto  col-start-3 col-span-3 row-start-3 row-span-2 self-end" src="/assets/images/dawson.jpg" alt="smaller placeholder">
		</section>
	</section>
	<!-- future and values section -->
	<section class="bg-[#E1E1E1]">
		<!-- second section of two columns -->
		<section class="sm:mx-6 md:mx-[5rem] mx-6">
			<h3 class="md:text-5xl text-4xl font-semibold block my-8 pt-8">The future of health</h3>
			<div class="flex flex-wrap md:justify-between items-start my-12 ">
				<div class="md:max-w-[45%] flex flex-col items-start min-w-screen">
					<img class="h-[80px] w-auto mb-4" src="/assets/ai-brain-logo.svg" alt="brain representing Artificial Intelligence">
					<p class="md:text-xl text-lg ">Pioneering the future of healthcare through advanced data analytics, machine learning, and artificial intelligence. Recognizing the transformative power of artificial intelligence, we are charting the course for a healthcare landscape powered by the limitless potential of artificial intelligence.</p>
				</div>
				<div class="md:mt-0 md:max-w-[45%] flex flex-col items-start min-w-screen mt-4">
					<img class="h-[90px] w-auto" src="/assets/heart-logo.svg" alt="heart representing heart health">
					<p class="text-lg md:text-xl">Our collective vision is to unlock the true potential hidden within digital health data, propelling it from just data to solutions that actually improve healthcare practices. Fuelling this vision is a diverse and talented team dedicated to pushing the boundaries of digital health.</p>
				</div>
			</div>
		</section>
		<!-- values section -->
		<section class=" sm:mx-6 md:mx-[5rem] my-8 mx-3 mx-6">
			<h4 class="text-3xl md:text-4xl">Serving our community</h4>
			<p>Here at Symbiotic AI we promise to serve with:</p>
			<!-- values boxes flex container -->
			<div class="flex justify-between mt-8 flex-wrap">
				<div class=" w-[160px] h-[160px] flex-none flex flex-col">
					<img class="bg-blue self-start justify-self-start w-[60px] h-auto absolute ml-4 p-1" src="/assets/values/innovation.svg" alt="logo representing innovation">
					<p class="min-w-full bg-black p-4 text-center mt-[2.8rem] text-white font-semibold text-lg">Innovation</p>
				</div>
				<div class="w-[160px] h-[160px] flex-none flex flex-col">
					<img class="bg-blue self-start justify-self-start w-[60px] h-auto absolute ml-4 p-1" src="/assets/values/respect.svg" alt="logo representing respect">
					<p class="min-w-full bg-black p-4 text-center mt-[2.8rem] text-white font-semibold text-lg">Respect</p>
				</div>
				<div class="w-[160px] h-[160px] flex-none flex flex-col">
					<img class="bg-blue self-start justify-self-start w-[60px] h-auto absolute ml-4 p-1" src="/assets/values/compassion.svg" alt="logo representing compassion">
					<p class="min-w-full bg-black p-4 text-center mt-[2.8rem] text-white font-semibold text-lg"> Compassion</p>
				</div>
				<div class="w-[160px] h-[160px] flex-none flex flex-col">
					<img class="bg-blue self-start justify-self-start w-[60px] h-[60px] absolute ml-4 p-1" src="/assets/values/integrity.svg" alt="logo representing integrity">
					<p class="min-w-full bg-black p-4 text-center mt-[2.8rem] text-white font-semibold text-lg"> Integrity</p>
				</div>
				<div class="w-[160px] h-[160px] flex-none flex flex-col">
					<img class="bg-blue self-start justify-self-start w-[60px] h-auto absolute ml-4 p-1" src="/assets/values/trust.svg" alt="logo representing trustworthiness">
					<p class="min-w-full bg-black p-4 text-center mt-[2.8rem] text-white font-semibold text-lg"> Trustworthiness</p>
				</div>
			</div>
		</section>
</section>
	<!-- our team section -->
	<section class="mx-3 sm:mx-6 md:mx-[5rem] mx-6 my-8 mt-[6rem]">
		<h3 class="md:text-4xl font-semibold text-3xl my-8 mb-[4rem]">Our Team of Experts</h3>
		<TeamCard {...arjunData}/>
		<TeamCardReverse {...joonData} />
		<TeamCard {...emmaData}/>
	</section>
</main>
<!-- end banner -->
<section class="md:mt-[8rem] flex flex-col items-center mt-[6rem] min-w-screen bg-blue">
	<h3 class=" text-3xl font-bold md:text-5xl mb-4 text-white pt-8">Join us on the journey.</h3>
	<div class="pb-8">
		<ContactButtonWhite />
	</div>
</section>