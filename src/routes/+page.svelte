<script>
	import ContactButton from "../lib/ContactButton.svelte";

	
</script>

<!-- hero section -->
<header class="font-inter text-white bg-black h-[30%] flex flex-col items-center justify-center">
	<div class="my-6 p-4">
		<h1 class="text-6xl font-bold">Take control of Your Heart. Your Health.</h1>
		<p class="block my-2">Powered by Symbiotic AI</p>
	</div>
</header>
<main class="mx-3 sm:mx-6 md:mx-[5rem]">
	<!-- first section including text and images-->
	<section class="flex justify-between flex-wrap mt-4">
		<section class="w-[50%] h-auto self-start leading-10">
			<h3 class="text-6xl block my-4 font-semibold">We turn big data into better health.</h3>
			<p class="text-xl max-w-[50ch] block my-6">Here at Symbiotic AI we are harnessing the potential of artificial intelligence to empower clinicians and patients making healthcare decisions.</p>
			<a href="/about" class="block max-w-max"><p class="my-6 bg-blue max-w-max px-2 py-[0.1rem] rounded-full text-white font-semibold text-md hover:bg-darkblue">Discover More</p></a>
		</section>
		<!-- overlapping images -->
		<section class="w-[50%] h-auto my-4 grid grid-cols-4 grid-rows-4">
			<img class="w-[442px] h-[365px] bg-slate-200 z-10 rounded-lg col-span-3 row-start-1 col-start-1 row-span-3" src="" alt="placeholder">
			<img class="w-[288px] h-[247px] bg-slate-500 rounded-lg col-start-3 col-span-3 row-start-3 row-span-2 self-end" src="" alt="smaller placeholder">
		</section>
	</section>
	<!-- second section of two columns -->
	<section>
		<h3 class="text-5xl font-semibold block my-8">The future of health</h3>
		<div class="flex flex-wrap justify-between items-start my-12">
			<div class="flex flex-col max-w-[45%] items-start">
				<img class="h-[80px] w-auto mb-4" src="/assets/ai-brain-logo.svg" alt="brain representing Artificial Intelligence">
				<p class="text-xl">Pioneering the future of healthcare through advanced data analytics, machine learning, and artificial intelligence. Recognizing the transformative power of artificial intelligence, we are charting the course for a healthcare landscape powered by the limitless potential of artificial intelligence.</p>
			</div>
			<div class="flex flex-col max-w-[45%] items-start">
				<img class="h-[90px] w-auto" src="/assets/heart-logo.svg" alt="heart representing heart health">
				<p class="text-xl">Our collective vision is to unlock the true potential hidden within digital health data, propelling it from just data to solutions that actually improve healthcare practices. Fuelling this vision is a diverse and talented team dedicated to pushing the boundaries of digital health.</p>
			</div>
		</div>
	</section>
	<!-- values section -->
	<section class="my-8">
		<h4 class="text-4xl font-semibold">Serving our community</h4>
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
		<div class="flex min-w-max items-start justify-end m-0">
			<a href="/mission" class="max-w-max"><p class="text-right bg-blue max-w-max px-3 py-[0.5rem] rounded-full text-white font-semibold text-md hover:bg-darkblue">Learn More</p></a>
		</div>
	</section>
	<!-- our team section -->
	<section class="my-8 mt-[6rem]">
		<h3 class="font-semibold text-4xl my-8 mb-[4rem]">Our Team of Experts</h3>
		<div class="flex justify-between flex-wrap">
			<div class="flex flex-col items-center">
				<img class="h-[250px] w-[250px] rounded-full bg-slate-200 mb-4" src="/" alt="Mr. Arjun Puri">
				<h5 class="font-semibold text-xl">Chief Executive Officer</h5>
				<p >Mr. Arjun Puri</p>
			</div>
			<div class="flex flex-col items-center">
				<img class="h-[250px] w-[250px] rounded-full bg-slate-200 mb-4" src="/" alt="Dr. Joon Lee">
				<h5 class="font-semibold text-xl">Chief Technology Officer</h5>
				<p>Dr. Joon Lee</p>
			</div>
			<div class="flex flex-col items-center">
				<img class="h-[250px] w-[250px] rounded-full bg-slate-200 mb-4" src="/" alt="Ms. Emma Bogner">
				<h5 class="font-semibold text-xl" >Product Manager</h5>
				<p>Ms. Emma Bogner</p>
			</div>
		</div>
	</section>
	<section class="flex flex-col items-center my-[8rem]">
		<h3 class="font-bold text-5xl mb-4">Join us on the journey.</h3>
		<ContactButton />
	</section>
</main>