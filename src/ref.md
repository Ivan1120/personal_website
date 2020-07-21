Heroku “content not from webpack is served from /app/public” despite using all default create-react-app config

```
So, I got a Solution, Heroku uses nodejs buildpack as default. You'll need to add that of CRA(Create react App).

First, check the build pack you're using heroku buildpacks -a <appname>

then change to CRA buildpack heroku buildpacks:set mars/create-react-app -a <appname>

Then redeploy.

You can read this article for more configuration
```

