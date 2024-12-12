export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
    build: {
        outDir: "dist", // Set the output directory to 'dist'
        emptyOutDir: true, // Clean the directory before building
    },
});
