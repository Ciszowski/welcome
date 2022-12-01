const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "1e2ff38f5abd945e6a859fa5fb1d99a6b1e4dc3c",
        options: {
            'sonar.projectName': 'laval-app',
            'sonar.projectDescription': 'scan project',
            'sonar.projectKey': 'laval-react-project',
            'sonar.projectVersion': '0.0.1',
            'sonar.sources': 'src',
            'sonar.language': '.js,.jsx',
            'sonar.javascript.lcov.reportPaths' : 'test-coverage/lcov.info',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)