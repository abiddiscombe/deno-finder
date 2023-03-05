/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "httpServer";
import { h, ssr, tw } from "nanossr";

import regions from "./regions.ts";

const Header = () => {
	return (
		<header class={tw`px-6 py-2 bg-white border-b border-gray-200 flex flex-wrap items-center gap-4`}>
			<h1 class={tw`text-lg text-gray-700 font-semibold`}>Deno Finder</h1>
			<hr class={tw`border-0 flex-1`} />
			<a class={tw`text-gray-500 text-xs hover:underline`} href="https://deno.com/deploy/docs/regions">Deploy Docs</a>
			<a class={tw`text-gray-500 text-xs hover:underline`} href="https://github.com/abiddiscombe/deno-finder">View Source</a>
		</header>
	);
};

const Main = () => {
	const regionCode = Deno.env.get("DENO_REGION") || "localhost";
	const regionText = regions[regionCode] ? regions[regionCode] : regionCode;

	for (let region in regions) {
	}

	return (
		<main class={tw`flex-1 px-6 py-14 grid place-items-center`}>
			<div class={tw`max-w-3xl text-center text-gray-100`}>
				<p>With <a href="https://deno.com/deploy" class={tw`text-white font-semibold hover:underline`}>Deno Deploy</a>, your code is deployed at edge locations globally.</p>
				<p>The nearest region to you, and thus the one you just received data from is...</p>
				<h2 class={tw`mt-6 mb-10 text-4xl font-bold font-mono`}>{regionText}</h2>
				<ul class={tw`flex flex-wrap place-content-center gap-2`}>
					{Object.entries(regions).map(([key, value]) => {
						if (key == regionCode) {
							return <li class={tw`px-3 py-1 border border-pink-700 rounded-xl text-[0.6em] text-white font-mono bg-pink-800 animate-pulse`}>{key}</li>;
						} else {
							return <li class={tw`px-3 py-1 border border-gray-200 rounded-xl text-[0.6em] text-gray-100 font-mono`}>{key}</li>;
						}
					})}
				</ul>
			</div>
		</main>
	);
};

const Footer = () => {
	return (
		<footer class={tw`p-6 text-center text-gray-200`}>
			<p class={tw`text-xs`}>
				made by <a href="https://abiddiscombe.dev" class={tw`hover:underline`}>@abiddiscombe</a> | not affiliated with The Deno Company
			</p>
		</footer>
	);
};

const AppMaster = () => {
	return (
		<div class={tw`min-h-screen flex flex-col bg-gradient-to-r from-purple-500 to-indigo-500`}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

console.log("[ 🦕 ] DenoFinder has started.");
console.log("[ 📡 ] Listening on :8000");

serve(() => {
	return ssr(() => <AppMaster />);
});
