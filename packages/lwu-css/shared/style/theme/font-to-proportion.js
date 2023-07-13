// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
    install(less, pluginManager, functions) {
        functions.add('font-to-proportion', (base, proportion) => {
            return base.value * proportion.value;
        });
    }
};