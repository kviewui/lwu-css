// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = ['red', 'orangered', 'orange', 'gold', 'yellow', 'lime', 'green', 'cyan', 'blue', 'deepblue', 'purple', 'pinkpurple', 'magenta', 'grey', 'primary', 'success', 'danger', 'warning', 'link', 'info']
const colorsMap = [
	colors,
	colors,
];

function calc(transArr) {
	let resultArr = [];
	function get(array, index, val) {
		if (!array[index]) {
			resultArr.push(val);
			return;
		};
		
		array[index].forEach((v, i) => {
			get(array, index + 1, index === 0 ? [v] : [...val, v]);
		});
	}
	get(transArr, 0);
	
	return resultArr;
}

module.exports = {
	install(less, pluginManager, functions) {
		functions.add('get-colors-map', (index, colorIndex = 0) => {
			return calc(colorsMap)[index.value][colorIndex.value];
		})
		
		functions.add('get-colors-map-len', () => {
			return calc(colorsMap).length;
		})
	}
};