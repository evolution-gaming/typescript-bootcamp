module.exports = {
    projects: [
        {
            displayName: "node env",
            testEnvironment: "node",
            preset: "ts-jest",
            roots: [
                "<rootDir>/basic-example/",
                "<rootDir>/shopping-cart-example/"
            ],

        },
        {
            displayName: "browser env",
            testEnvironment: "jsdom",
            preset: "ts-jest",
            setupFilesAfterEnv: ["<rootDir>/__tests__/setup.ts"],
            roots: [
                "<rootDir>/react-example/",
            ],
        },
    ]
};