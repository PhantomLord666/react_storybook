
import StyleDictionary from "style-dictionary";

export default (() => {
  // Registrar el formato personalizado
  StyleDictionary.registerFormat({
    name: "css-themes",
    format: ({ dictionary }) => {
      // Generar tokens para el tema "light"
      const lightTokens = dictionary.allTokens
        .filter((token) => token.path.includes("light"))
        .map((token) => `  --${token.path.slice(0, -1).join("-")}: ${token.value};`)
        .join("\n");

      // Generar tokens para el tema "dark"
      const darkTokens = dictionary.allTokens
        .filter((token) => token.path.includes("dark"))
        .map((token) => `  --${token.path.slice(0, -1).join("-")}: ${token.value};`)
        .join("\n");

      return `
:root[data-theme="light"] {
${lightTokens}
}

:root[data-theme="dark"] {
${darkTokens}
}`;
    },
  });

  // Registrar el formato para generar variables en JS
  StyleDictionary.registerFormat({
    name: "js-themes",
    format: ({ dictionary }) => {
      const lightTokens = dictionary.allTokens
        .filter((token) => token.path.includes("light"))
        .reduce((acc, token) => {
          const tokenName = token.path.slice(0, -1).join("_");
          acc[tokenName] = token.value;
          return acc;
        }, {});

      const darkTokens = dictionary.allTokens
        .filter((token) => token.path.includes("dark"))
        .reduce((acc, token) => {
          const tokenName = token.path.slice(0, -1).join("_");
          acc[tokenName] = token.value;
          return acc;
        }, {});

      return `export const lightTheme = ${JSON.stringify(lightTokens, null, 2)};
export const darkTheme = ${JSON.stringify(darkTokens, null, 2)};`;
    },
  });

  // Configuración del Style Dictionary
  return {
    source: ["tokens/**/*.json"], // Ruta de los tokens
    platforms: {
      css: {
        transformGroup: "css", // Transformaciones predefinidas
        buildPath: "build/css/", // Carpeta de salida
        files: [
          {
            destination: "variables.css", // Archivo de salida para CSS
            format: "css-themes", // Usamos el formato registrado para CSS
          },
        ],
      },
      js: {
        transformGroup: "js", // Transformaciones predefinidas para JS
        buildPath: "build/js/", // Carpeta de salida para JS
        files: [
          {
            destination: "variables.js", // Archivo de salida para JS
            format: "js-themes", // Usamos el formato registrado para JS
          },
        ],
      },
    },
  };
})();

