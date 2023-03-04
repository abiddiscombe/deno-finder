# Deno Finder
When using [Deno Deploy](https://deno.com/deploy) your code is deployed at the edge globally. This tool will return the name of the edge region you just connected to. You can view a complete of Deno Deploy regions [here](https://deno.com/deploy/docs/regions). Please note that you may also recieve data from other regions in the Deno Deploy network.

This tool uses the `DENO_REGION` environment variable to determine which region your isolate is running in. More information about this can be found [here](https://deno.com/deploy/docs/projects).

I have no affliation with The Deno Company. I made this app for fun and to learn more about Deno Deploy and the [`nanossr`](https://crux.land/nanossr@0.0.1) library (which can be used to develop tiny SSR apps).
