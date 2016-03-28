# Automating Tasks using Gulp
My workflow involves using Gulp to automate certain tasks on almost all theme builds I carry out. This includes:

* Compiling SCSS.
* Optimizing images.
* Installing bower components.
* Creating language .pot files.
* Concatenating JavaScript.
* SCSS & JS Linting.
* Adding BrowserSync support allowing instant reload in web browser.

Until now I have just included these tasks within my starter theme, however it makes more sense to separate these tasks into their own repository so they can be worked on and improved from one central location, without having to then update multiple theme builds.

## Installation
Clone this repo to a sub folder within your theme, then run `npm install`. Configure the settings within `/gulp-build-tasks/config.js` to suit the project (there are source paths, destination paths, text domain, notification messages for each task defined there).

## Tasks
The following key tasks are available:

* `gulp` runs the default gulp watch task, looking for changes in code and compiling as required..
* `gulp serve` calls the default gulp watch task and launches BrowserSync session using the local url defined in `config.js`.
* `gulp build` calls `gulp bower` to load dependencies, then runs `gulp scripts`, `gulp styles`, `gulp images` and `gulp i18n`. Should be used when setting up a new installation to compile all of the theme files from `/develop/` into `/assets/`.
* `gulp check` performs a SCSS lint and JS lint, referencing a `.scss-lint.yml` and `.jshintrc` in the theme root.

The following tasks can also be run independently if required:

* `gulp bower` will check for a bower.json in the theme root (one level up) and run `bower install` (this task now runs as a dependency of the `styles` task).
* `gulp jshint` will lint your JavaScript (within `/assets/js` only) using standards defined in `.jshintrc` in theme root.
* `gulp i18n` generates a translations file at `/languages/textdomain.pot`, where textdomain is defined within config.js.
* `gulp scripts` concatenates all scripts from `/develop/js/` to a single file (default `theme.js`) in a `/js/` folder in the theme root.
* `gulp images` optimizes and outputs all images from `/develop/images/` to `/images/` within the theme.
* `gulp scsslint` runs through the SCSS files in `/deveop/scss/` and reports any issues.
* `gulp styles` compiles SCSS in `/develop/scss/style.scss` to `style.css` and `style.css.map` in theme root.
