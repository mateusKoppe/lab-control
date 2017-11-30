# Lab Control - WebApp

## How to install
You will need to have [node and npm](https://nodejs.org/en/).
```bash
git clone https://github.com/mateusKoppe/labcontrol-webapp &&
cd labcontrol-webapp &&
npm install
```
Now you will need an api to manage the data, you can use the [labcontrol-api](https://github.com/mateusKoppe/labcontrol-api) for it. you will also need to set your api url with the `ApiServiceProvider`, you can find it in the `src/app/app.module.js` file.
And then you will be able to run the command bellow to start your app:
```bash
npm start
```

## How to build
```bash
npm run build
```
