var sources = {
    root: "../",
    code: "../**/*.php",
    images: "../assets/images/**/*",
    scripts: "../assets/js/**/*.js",
    styles: "../assets/scss/**/*.scss"
};

module.exports = {
    i18n: {
        src: sources.code,
        textdomain: 'genesis-starter-theme',
        dest: '../languages/',
        message: 'i18n tasks complete.'
    },
    images: {
        src: sources.images,
        dest: '../images/',
        message: 'Images task complete.'
    },
    scripts: {
        src: sources.scripts,
        lint: sources.root + '.jshintrc',
        output: 'theme.js',
        dest: '../js/',
        message: 'Javascript tasks complete.'
    },
    server: {
        url: 'genesis-starter-theme.dev'
    },
    styles: {
        src: sources.styles,
        lint: sources.root + '.scss-lint.yml',
        output: 'compressed',
        dest: '../',
        message: 'Stylesheet compiled & saved.'
    },
    watch: {
        code: sources.code,
        images: sources.images,
        scripts: sources.scripts,
        styles: sources.styles
    }
};
