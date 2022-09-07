# Blogsville Clone 


This is going to bg my blogsville clone. I'm making a clone of a site called [blogsville](https://blogsville-template.webflow.io/).



## Sections 

[Project Folder Structure](#project-folder-structure)

[Config Files](#config-files)

[Rules Regarding Projects](#rules-regarding-projects)


## [Project Folder Structure](#sections) 

```
    app---src---|___layouts
                |___components
                |___composables
                |___components
                |___stores
                |___types

    dockerfiles---|
                  |___npm.dockerfile
                  |___preview.dockerfile
                  |___astro.dockerfile
                  |___server.dockerfile

```


## [Config Files](#sections)

There are three config files that are very important to keep the way they are.

- `tailwind.config.cjs`
- `astro.config.ts`
- `tsconfig.json`

### Tailwind Config

```js
{
darkMode: "class",
content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
theme: {
    extend: {
      fontFamily() {
        return {
          display: ["Decalotype", "sans-serif"],
          body: ["Archivo", "sans-serif"],
        };
      },
    },
  },
}
```

- The `darkMode:"class"` is used to enable the use of dark mode for most classes

- The `content:` allows tailwind to search for all files with classes in them in order to write them to the style sheet 


### Astro Config

```ts 

export default defineConfig({
  markdown: {
    remarkPlugins: ["remark-directive", HtmlDirectives],
  },
  integrations: [tailwind(), vue()],
  server: {
    host: true,
  },
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    ssr: {
      external: ["svgo"],
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});


```



### Ts Config

```
"baseUrl": ".",
"paths": {
    "@/*": ["./src/*"],
}
```

These two setting are very important the `"."` refers to the folder that the tsconfig is in.
The paths stops typescript from throwing an error when I use `"@"` to refer to the src file.   


## [Rules Regarding Projects](#sections)


Astro is a framework that does not allow me to create real apps from now on I will need to follow a set of restrictions regarding This framework.  
Because of the limitations oof astro and the fact that I need to make sure that I remain consistent. I'm going to have to follow these rules.

1. The `BaseLayout` component is the root layout it will only be used to create other layouts

2. Global Styles must only be declared in the `BaseLayout` layout. 
    
    - This means `<style is:global>` cannot be used on other layouts   

3. The `index.astro` file must always be used to create all my first pages unless told otherwise 

