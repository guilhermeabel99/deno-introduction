import { copy } from "https://deno.land/std/fs/copy.ts";

copy("file.txt", "bar/file.txt", { overwrite: true });
