// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colorBuilder } = require('@kviewui/color-builder')

module.exports = {
    install(less, pluginManager, functions) {
        functions.add('get-rgb-str', (color) => {
            return colorBuilder.getRgbStr(color.value);
        });

        functions.add('get-var-str', (color) => {
            if (color.value.indexOf('rgb') === 0) {
                return color.value.replace(/rgb\((.*)\)/, '$1');
            }

            return colorBuilder.getRgbStr(color.value);
        });
    },
};