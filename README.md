
> Find the New Version: https://github.com/storyblok/rendering-service


# Deprecated: Quickstart for Rendering Service

## Getting started

After cloning this repo:

1. Create a space in Storyblok and choose advanced settings to choose the option "Hosted/Rendering service" and then "Quickstart"
2. In your `config.js` fill in the parameters `INSERT_SPACE_ID` and `INSERT_YOUR_DOMAIN` 
3. Rename _token.js to token.js and insert your "theme" token (which you can find in the Storyblok dashboard).
4. Fire up your dev environment
```
$ cd ./project && npm i && npm run dev
```
5. Add your dev environment 'http://localhost:4440/' to the environment settings

<img style="margin: 20px 0;" src="https://a.storyblok.com/f/42225/2292x1278/a193038be7/quickstart.jpg" />

## Commands

In the background we're using `gulp` so you can change all the commands below and adopt them to your need.
```
# Start you local dev environment on port 4440
$ npm run dev

# Build static assets (styles, scripts)
$ npm run build

# Sync your current state on the dev environment
$ npm run deploy:dev

# Sync your current state on the live environment
$ npm run deploy:live
```

## Frequently Ask Questions

#### How can I load stories to create an overview for (news|articles|projects|...):

You can simply use following snippet to load all the stories from a specific folder according to the folder's slug like:

```
{% set newsitems from stories starts_with:'news', per_page: 3 %}
{% for news in newsitems.data %}
    {{ news.name }}
{% endfor %}
```

#### I used the Weblink/Storylink field type - How can I get the link in the template?
You will receive the actual path by using the `url` filter:

```
{{ blok.your_field_key | url }} <!-- Outputs a link, giving a link object -->
```

#### I uploaded a static file in the views/assets folder how can I reference that?
We've prepared the `asset_url` filter for that:

```
{{ 'assets/js/scripts.js' | asset_url }} <!-- Outputs the theme url -->
```

#### Is there a full documentation about those filters and other possibilities?

Sure! You can find them right here:

- [The Basics of Liquid](https://www.storyblok.com/docs/Rendering-Service/the-basics-of-liquid)
- [The Liquid of Storyblok](https://www.storyblok.com/docs/Rendering-Service/Theme-Documentation)
- [I want my own domain](https://www.storyblok.com/docs/Rendering-Service/Introduction)

<br>
<br>
<p align="center">
<img src="https://a.storyblok.com/f/39898/1c9c224705/storyblok_black.svg" alt="Storyblok Logo">
</p>
