module.exports = {
    projects: [
        {
            displayName: "node",
            testEnvironment: "node",
            preset: "ts-jest",
            roots: [
                "<rootDir>/src/",
            ],
        },
        {
            displayName: "jsdom",
            testEnvironment: "jsdom",
            preset: "ts-jest",
            setupFilesAfterEnv: ["<rootDir>/__tests__/setup.ts"],
            roots: [
                "<rootDir>/react-example/",
            ],
        },
    ]
};