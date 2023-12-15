module.exports = function (config) {
    config.set({
        autoWatch: false,
        singleRun: true,
        frameworks: ['qunit'],
        files: [
            'src/index.js',
            'src/__test__/*.test.js',
        ],
        browsers: ['Chrome', 'Firefox'],
        preprocessors: {
            'src/index.js': ['webpack', 'coverage'],
            'src/__test__/*.test.js': ['webpack'],
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'text-summary' },
            ],
        },
        plugins: [
            require('karma-qunit'),
            require('karma-chrome-launcher'),
            require('karma-firefox-launcher'),
            require('karma-coverage'),
            require('karma-webpack')
        ],
        webpack: {
            watch: false
        },
        colors: true,
        concurrency: Number.POSITIVE_INFINITY
    });
};
