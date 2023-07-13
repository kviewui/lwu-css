// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colorBuilder } = require('@kviewui/color-builder');

module.exports = {
    install(less, pluginManager, functions) {
        functions.add('color-palette-dark', (color, index) => {
            return colorBuilder.generate(color.value, { index: index.value + 1, dark: true });
        });
    },
};