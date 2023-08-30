> I'm not currently creating 'official' GitHub releases of Deno Finder\
> The current version is: **2.0.0**

# Deno Finder

With [Deno Deploy](https://deno.com/deploy), your code is deployed at edge locations globally.

This SSR site tool will return the name of the nearest edge region to your geographic position, and thus the one you are most likely to recieve data from. You can view a complete list of Deno Deploy regions [here](https://deno.com/deploy/docs/regions). Please note that you may also recieve data from other regions in the Deno Deploy network, this could be due to traffic demands, downtime, or your local internet connection settings. If you're interested in experimenting, open this site through a VPN and see what happens!

I built this site as an introduction to Server-Side Rendering via the [Eta](https://eta.js.org/) templating engine. As [this blog post](https://deno.com/blog/the-future-and-past-is-server-side-rendering) describes, this is not truly scalable SSR, but works perfectly well for smaller sites where client-side JavaScript, session management or other fancy features are not required.
