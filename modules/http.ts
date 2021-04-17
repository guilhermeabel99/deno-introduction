import { serve } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 8768 });

var a = '{ "name":"John", "age":30, "city":"New York"}'


for await (const req of s) {
    req.respond({ body: a });
} 