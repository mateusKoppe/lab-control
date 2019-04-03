# Lab Control - WebApp
Just a study project, feel free to see the code and this project in actions.

## Stack
- [AngularJs](https://angularjs.org/)
- [Webpack](https://webpack.js.org/)
- [Scss](https://sass-lang.com/)
- [BatAngularJs](https://github.com/mateusKoppe/generator-batangularjs) (As yeoman generator)
- Javascript ES6+
- Ui Kit created for this project (lc-ui)

## Getting Started
- Install [NodeJs and NPM](https://nodejs.org/en/)
- Install the dependencies:
  ```bash
  npm install
  ```
- You will need an api, use [labcontrol-api](https://github.com/mateusKoppe/labcontrol-api) for it
- Configure your api's url in the `ApiServiceProvider`, you'll find the configurations in `src/app/app.module.js`
- Start your app:
  ```bash
  npm start
  ```

## Scripts
```bash
npm start      # Start the application
npm run build  # Build the application
npm run lint   # Runs eslint
```

## More info

### LabControl UI
Check `src/app/assets/scss/` and `src/app/common/lc-ui/` to see the code this project ui-kit.

### Style Guide
This project follows the  [Todd Motto AngularJs Style Guide](https://github.com/toddmotto/angularjs-styleguide).

### Contributing
If you have some question, sugestion, want to add a feature or anything like this feel free to open an issue in this project.

Code reviews, documentation improvements, and any help is totaly welcome, as I said before, this is a study project.

### License
MIT License © Mateus Koppe
