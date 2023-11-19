function getAliasesFromTsConfig() {
  const tsConfig = require("./tsconfig.json");
  const paths = tsConfig.compilerOptions.paths;
  let alias = {};
  Object.keys(paths).forEach((key) => {
    alias[key.replace(/\/\*$/, "")] = `./${paths[key][0].replace(/\/\*$/, "")}`;
  });

  return alias;
}

module.exports = function (api) {
  api.cache(true);

  const plugins = [
    "react-native-reanimated/plugin",
    ["nativewind/babel", {
      mode: "compileAndTransform"
    }],
    [
      require.resolve("babel-plugin-module-resolver"),
      "module-resolver",
      {
        alias: getAliasesFromTsConfig(),
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        root: ["./src"]
      }
    ]
  ];

  const presets = [
    ["module:metro-react-native-babel-preset", {
      unstable_transformProfile: 'hermes-stable'
    }]
  ];

  return {
    plugins,
    presets
  };
};
