# Requirements
1. Infexible requirement 1
- Zero coupling between child projects
- No importing of functions/objects/classess/etc
- No shared stated
- Shared libraries through moduleFederation is okay

2. Inflexible requirement 2
- Near-zero coupling between container and child apps
    - For example login - logout button in container
        After user logins, the button change to logout and there will be some need of communications across child and parent
- Container shouldn't assume that a child is using a particular framework
- Any necessary communication done with callbacks or simple events

3. Inflexible Requirement 3
- CSS from one project shouldn't affect another. Scoping of CSS

4. Inflexible Requirement 4
- Version control (monorepo vs separate) shouldnt' have any impack on the overall project

5. Inflexible Requirement 5
- Container should be able to decide to always use the latest version of a microfrontend or specific a specific version
- Example: marketing microfrontend has upgraded to new version. but system owner can decide whether to add it into container
    Can choose to use new or old versions



# What is ES
- ECMAScript = the official standard for JavaScript
- A rulebook defining how javascript should work
- ES gets updated every year
Version	    Common name	    What it introduced
ES5	        (old)	        basic JS
ES6	        ES2015	        let, const, arrow functions
ES2020	    modern JS	    optional chaining (?.)
ES2023+	    latest	        newer features

# vite and webpack
- Webpack and vite are tools that prepare your frontend code so browsers can run
- Modern frontend apps use:
    multiple JS files (modules)
    frameworks (Vue, React)
    CSS preprocessors
    images, fonts, etc.
- Browsers don’t naturally handle all this neatly at scale.
    So you need a build tool to:
        combine files
        optimize code
        serve your app during development
## Webpack
- Webpack bundles everything into a few files before running
    Your code → Webpack → bundle.js → Browser
- ⚙️ Key idea
    - Builds a dependency graph
    - Packs everything into optimized bundles
- 👍 Pros
    - Very powerful and flexible
    - Huge ecosystem
    - Supports complex setups (e.g. module federation)
- 👎 Cons
    - Slow startup (big projects especially)
    - Complex config (webpack.config.js)
    - Can be painful to debug (you’ve seen errors like shared module issues)

## Vite
- What it does:
    Vite does not bundle everything upgront during dev
    instead -> Your code → served directly via browser (ES modules)
- It only bundles when you run production build.
- ⚙️ Key idea
    - Uses native browser ES modules
    - Uses fast tools like esbuild under the hood
- 👍 Pros
    - 🔥 Extremely fast startup
    - Instant hot reload
    - Minimal config
    - Simpler mental model
- 👎 Cons
    - Less mature than Webpack (but catching up fast)
    - Some advanced features are different or limited


# Production set up
- in package.json, we write our prod build in script
        "build": "webpack --config config/webpack.prod.js"
- It will generate dist folder with all the files