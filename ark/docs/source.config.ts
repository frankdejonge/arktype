import { defineConfig, defineDocs } from "fumadocs-mdx/config"
import { shikiConfig } from "./lib/shiki.ts"

export const { docs, meta } = defineDocs({
	dir: "content/docs"
})

export default defineConfig({
	mdxOptions: {
		rehypeCodeOptions: shikiConfig
	}
})
