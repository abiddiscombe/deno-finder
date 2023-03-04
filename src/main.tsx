/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { h, ssr, tw } from "https://crux.land/nanossr@0.0.1";

const Header = () => {
  return (
    <header
      class={tw`px-8 py-4 bg-white border-b border-gray-200 flex flex-wrap items-center gap-4`}
    >
      <h1 class={tw`text-lg text-gray-700 font-semibold`}>Deno Finder</h1>
      <hr class={tw`border-0 flex-1`} />
      <a
        class={tw`text-gray-500 text-xs hover:underline`}
        href="https://deno.com/deploy/docs/regions"
      >
        Deploy Docs
      </a>
      <a
        class={tw`text-gray-500 text-xs hover:underline`}
        href="https://github.com/abiddiscombe/deno-finder"
      >
        View Source
      </a>
    </header>
  );
};

const Main = () => {
  const region = Deno.env.get("DENO_REGION") || "localhost";
  return (
    <main class={tw`flex-1 p-8 grid place-items-center`}>
      <div class={tw`max-w-2xl text-center text-gray-700`}>
        <p>
          Your nearest{" "}
          <a href="https://deno.com/deploy" class={tw`text-purple-600`}>
            Deno Deploy
          </a>{" "}
          region is...
        </p>
        <h2 class={tw`my-6 text-4xl font-bold font-mono`}>{region}</h2>
        <p class={tw`text-xs`}>
          Your code is deployed at the edge globally, and this is the region
          you've just recieved data from.
        </p>
      </div>
    </main>
  );
};

const Footer = () => {
  return (
    <footer class={tw`px-8 py-4 text-center text-gray-700`}>
      <p class={tw`text-xs`}>
        made with ❤️ & 🦕 by{" "}
        <a href="https://abiddiscombe.dev" class={tw`hover:underline`}>
          @abiddiscombe
        </a>
      </p>
    </footer>
  );
};

const AppMaster = () => {
  return (
    <div
      class={tw`h-screen flex flex-col bg-gradient-to-b from-gray-100 to-purple-200`}
    >
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
