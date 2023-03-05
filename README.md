# Deno Finder
With [Deno Deploy](https://deno.com/deploy), your code is deployed at edge locations globally.

This SSR site tool will return the name of the nearest edge region to your geographic position, and thus the one you are most likely to recieve data from. You can view a complete list of Deno Deploy regions [here](https://deno.com/deploy/docs/regions). Please note that you may also recieve data from other regions in the Deno Deploy network, this could be due to traffic demands, downtime, or your local internet connection settings. If you're interested in experimenting, open this site through a VPN and see what happens!

**[Click here](https://finder.deno.dev)** to see the site in action.

This tool uses the `DENO_REGION` environment variable to determine which region your Deno isolate is running in.

---

I have no affiliation with The Deno Company. I made this app as a Deno fan and to learn more about Deno Deploy and the [`nanossr`](https://crux.land/nanossr@0.0.1) library (which can be used to develop simple SSR apps such as this one). I hope you find it useful! Suggestions and contributions are welcome :)