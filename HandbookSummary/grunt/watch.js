// Watches files for changes and runs tasks based on the changed files
module.exports = {
    ts: {
        files: [
            'src/**/*.ts',
            'test/**/*.ts'
        ],
        tasks: ['ts:default']
    },
    //test: {
    //    files: [
    //        'out/**/*.js'
    //    ],
    //    tasks: ['mochaTest:test']
    //}

};