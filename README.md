<p align="center">
  <h1 align="center">Quickstart for Storyblok</h1>
  <p align="center">A <a href="https://www.storyblok.com" target="_blank">Storyblok</a> theme with liquid and our render service to simply start your website with us.</p>
</p>
<br><br>

## Visit it here:
https://ac0e600a.me.storyblok.com/

## What is a storyblok theme
If you want a hosting with our Rendering Service so you won't have to setup a server on your own you can directly choose from one of our themes.
Checkout the [theme documentation](https://www.storyblok.com/docs/Rendering-Service/Theme-Documentation) to know more about the template syntax.

## How can I start with a theme
The most efficient way to start a storyblok project as a developer would be our [Command Line Interface](https://www.storyblok.com/docs/Guides/command-line-interface). For the Quickstart we even offer an own command.

```
npm i storyblok -g
storyblok quickstart
```

and choose your theme. You can of course simply `download` or `clone` this repository as well.

1. `git clone https://github.com/storyblok/creator-theme`
2. Rename ```_token.js``` to ```token.js``` and insert your theme token. You can find your theme token in the space settings of the [Storyblok app](https://app.storyblok.com).
3. Replace INSERT_SPACE_ID with your space id and *INSERT_YOUR_DOMAIN* with your domain in ```config.js```. You can find your space id and domain in the space settings.
4. Run ```npm install```
5. Run ```gulp```
6. Ready! You can now edit the templates in ```views``` or defining css in the ```source``` folder.

## Start your local environment

Make sure [npm](https://www.npmjs.com/) is installed:

```
## Install all frontend development related dependencies.
npm install

## This will start up a proxy for the render service on :4200.
gulp
```


## Folder structure

- `/source/`
  The place where you should put all your scripts, styles source code.
- `/views/`
  All your layouts and components at one space - if you add a new or change an existing [Liquid](https://help.shopify.com/themes/liquid) component (`.liquid`)
  the gulp build will trigger an instant reload for you in the browser - also each component is a representation of a storyblok component.
  If you create a headline component in storyblok - make sure to create a `headline.liquid` as well - so this application knows which component
  to render.

## You want to know more about storyblok?

- [Prologue - Introduction](https://www.storyblok.com/docs/Prologue/Introduction)
- [Terminology - Introduction](https://www.storyblok.com/docs/terminology/introduction)
- [Content Delivery API - Introduction](https://www.storyblok.com/docs/Delivery-Api/introduction)


<br>
<br>
<p align="center">
<img src="https://a.storyblok.com/f/39898/1c9c224705/storyblok_black.svg" alt="Storyblok Logo">
</p>
