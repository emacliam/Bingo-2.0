<template>
  <main class="flex flex-col w-full max-w-screen-sm px-8 md:max-w-lg md:mx-auto md:p-4  bg-white shadow-lg mt-24 rounded-lg h-full" >
      <div class="text-center font-bold text-lg">
          <span>Login</span>
      </div>
<div class="mt-6" >
	<div class="flex flex-col mb-4">
		<label for="email"
			   class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
			Email
		</label>

		<div class="relative">

			<div class="absolute flex border border-transparent left-0 top-0 h-full w-10">
				<div class="flex items-center justify-center rounded-tl rounded-bl z-10 bg-blue-700 text-gray-600 text-lg h-full w-full">

<svg class="fill-current text-white h-6 w-6 stroke-current" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 100 100" viewBox="0 0 100 100"><path d="M50,5C25.2,5,5,25.2,5,50c0,24.8,20.2,45,45,45c1.1,0,2-0.9,2-2s-0.9-2-2-2C27.4,91,9,72.6,9,50S27.4,9,50,9s41,18.4,41,41
	v10c0,5-4,9-9,9s-9-4-9-9V50c0-12.7-10.3-23-23-23c-12.7,0-23,10.3-23,23c0,12.7,10.3,23,23,23c8.1,0,15.1-4.2,19.3-10.4
	C70.4,68.5,75.7,73,82,73c7.2,0,13-5.8,13-13V50C95,25.2,74.8,5,50,5z M50,69c-10.5,0-19-8.5-19-19s8.5-19,19-19s19,8.5,19,19
	S60.5,69,50,69z"/></svg>
				</div>
			</div>

			<input id="email"
				   name="email"
				   type="email"
				   placeholder="Johndoe@mail.com"
				   value=""
				   class="text-sm sm:text-base relative w-full border rounded placeholder-gray-700 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12">

		</div>
	</div>
	<div class="flex flex-col mb-4">
		<label for="password"
			   class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
			Password
		</label>

		<div class="relative">

			<div class="absolute flex border border-transparent left-0 top-0 h-full w-10">
				<div class="flex items-center justify-center rounded-tl rounded-bl z-10 bg-blue-700 text-gray-600 text-lg h-full w-full">
					<svg class="fill-current text-white"  width="30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Слой_1" version="1.1" viewBox="0 0 40 40" xml:space="preserve"><path d="M9.4 29.8c-2.4 0-4.9-.9-6.7-2.8-3.7-3.7-3.7-9.8 0-13.5 3.3-3.3 8.5-3.7 12.3-1 .4.3.5 1 .2 1.4-.3.4-.9.5-1.4.2-3-2.2-7.1-1.9-9.7.8-2.9 2.9-2.9 7.7 0 10.6 2.9 2.9 7.7 2.9 10.6 0 .1-.1.2-.2.3-.4.4-.4 1-.5 1.4-.1.4.4.5 1 .1 1.4-.1.2-.3.3-.4.4-1.9 2.1-4.3 3-6.7 3z"/><path d="M9.4 24.6c-1.1 0-2.2-.4-3-1.3-.8-.8-1.3-1.9-1.3-3s.4-2.2 1.3-3c.8-.8 1.9-1.3 3-1.3s2.2.4 3 1.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-.9-.9-2.4-.9-3.2 0-.4.4-.7 1-.7 1.6 0 .6.2 1.2.7 1.6.9.9 2.4.9 3.2 0 .4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.8.9-1.9 1.3-3 1.3z"/><path d="M36 25.8c-1.4 0-2.1-.8-2.6-1.3s-.7-.7-1.2-.7-.7.2-1.2.7c-.5.6-1.2 1.3-2.6 1.3-1.4 0-2.1-.8-2.6-1.3s-.7-.7-1.2-.7-.7.2-1.2.7c-.5.6-1.2 1.3-2.6 1.3-1.4 0-2.1-.8-2.6-1.3-.4-.4-.6-.6-.9-.7-.5-.1-.9-.7-.8-1.2s.7-.9 1.2-.8c.9.2 1.5.8 1.9 1.2.5.5.7.7 1.2.7s.7-.2 1.2-.7c.5-.6 1.2-1.3 2.6-1.3 1.4 0 2.1.8 2.6 1.3s.7.7 1.2.7.7-.2 1.2-.7c.5-.6 1.2-1.3 2.6-1.3 1.4 0 2.1.8 2.6 1.3.3.3.5.5.7.6l2.3-3.4-2.3-3.5H16.6c-.6 0-1-.4-1-1s.4-1 1-1H36c.3 0 .6.2.8.4l3 4.5c.2.3.2.8 0 1.1l-3 4.5c-.2.5-.5.6-.8.6z"/><metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description about="https://iconscout.com/legal#licenses" dc:title="access,api,key,password,p" dc:description="access,api,key,password,p" dc:publisher="Iconscout" dc:date="2017-09-26" dc:format="image/svg+xml" dc:language="en"><dc:creator><rdf:Bag><rdf:li>The Eyecons</rdf:li></rdf:Bag></dc:creator></rdf:Description></rdf:RDF></metadata></svg>
				</div>
			</div>

			<input id="password"
				   name="password"
				   type="password"
				   placeholder="********"
				   value=""
				   class="text-sm sm:text-base relative w-full border rounded placeholder-gray-700 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12">

		</div>
	</div>
</div>
<div class="rounded-sm px-4 flex items-center justify-center w-48 h-8 mx-auto mt-6 bg-blue-700 hover:bg-blue-500 cursor-pointer transform duration-300 ease-in-out">
   <span class="text-white">Login</span>
</div>
  </main>
</template>

<script>
export default {
layout:'mobile-none',
}
</script>

<style>

</style>