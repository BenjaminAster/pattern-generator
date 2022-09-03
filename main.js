
const tileColumns = 8 + Math.floor(Math.random() * 4);
const tileRows = tileColumns;

const maxColors = 4;

const generateTile = (/** @type {{ x: number, y: number, width: number, height: number, depth: number }} */ { x, y, width, height, depth }) => {
	let string = "";
	const subTiles = Math.ceil(Math.random() * 3);
	if (depth > 3 || subTiles <= 1) {
		const colorIndex1 = Math.floor(Math.random() * maxColors);
		const colorIndex2 = (colorIndex1 + Math.ceil(Math.random() * (maxColors - 1))) % maxColors;
		string += `<rect class="color-${colorIndex1}" x="${x.toFixed(5)}" y="${y.toFixed(5)}" width="${(width * 1.1).toFixed(5)}" height="${(height * 1.1).toFixed(5)}" />\n`;
		const patternIndex = Math.floor(Math.random() * 6);
		switch (patternIndex) {
			case (0): case (1): {
				const rotationIndex = Math.floor(Math.random() * 4);
				switch (rotationIndex) {
					case (0): {
						string += `<path class="color-${colorIndex2}" d="`
							+ `M ${x.toFixed(5)} ${(y + height).toFixed(5)} `
							+ `a ${width.toFixed(5)} ${height.toFixed(5)} 0 0 1 ${width.toFixed(5)} ${(-height).toFixed(5)} `
							+ (patternIndex === 0 ? `v ${height.toFixed(5)} ` : (
								`v ${(height * .3).toFixed(5)} `
								+ `a ${(width * .7).toFixed(5)} ${(height * .7).toFixed(5)} 0 0 0 ${(-width * .7).toFixed(5)} ${(height * .7).toFixed(5)} `
							)) + `Z" />\n`;
						break;
					} case (1): {
						string += `<path class="color-${colorIndex2}" d="`
							+ `M ${x.toFixed(5)} ${y.toFixed(5)} `
							+ `a ${width.toFixed(5)} ${height.toFixed(5)} 0 0 1 ${width.toFixed(5)} ${height.toFixed(5)} `
							+ (patternIndex === 0 ? `h ${(-height).toFixed(5)} ` : (
								`h ${(-height * .3).toFixed(5)} `
								+ `a ${(width * .7).toFixed(5)} ${(height * .7).toFixed(5)} 0 0 0 ${(-width * .7).toFixed(5)} ${(-height * .7).toFixed(5)} `
							)) + `Z" />\n`;
						break;
					} case (2): {
						string += `<path class="color-${colorIndex2}" d="`
							+ `M ${(x + height).toFixed(5)} ${y.toFixed(5)} `
							+ `a ${width.toFixed(5)} ${height.toFixed(5)} 0 0 1 ${(-width).toFixed(5)} ${height.toFixed(5)} `
							+ (patternIndex === 0 ? `v ${(-height).toFixed(5)} ` : (
								`v ${(-height * .3).toFixed(5)} `
								+ `a ${(width * .7).toFixed(5)} ${(height * .7).toFixed(5)} 0 0 0 ${(width * .7).toFixed(5)} ${(-height * .7).toFixed(5)} `
							)) + `Z" />\n`;
						break;
					} case (3): {
						string += `<path class="color-${colorIndex2}" d="`
							+ `M ${(x + height).toFixed(5)} ${(y + height).toFixed(5)} `
							+ `a ${width.toFixed(5)} ${height.toFixed(5)} 0 0 1 ${(-width).toFixed(5)} ${(-height).toFixed(5)} `
							+ (patternIndex === 0 ? `h ${height.toFixed(5)} ` : (
								`h ${(height * .3).toFixed(5)} `
								+ `a ${(width * .7).toFixed(5)} ${(height * .7).toFixed(5)} 0 0 0 ${(width * .7).toFixed(5)} ${(height * .7).toFixed(5)} `
							)) + `Z" />\n`;
						break;
					}
				}
				break;
			} case (2): {
				const rotationIndex = Math.floor(Math.random() * 2);
				switch (rotationIndex) {
					case (0): {
						string += `<path class="color-${colorIndex2}" d="`
							+ `M ${x.toFixed(5)} ${y.toFixed(5)} `
							+ `a ${width.toFixed(5)} ${height.toFixed(5)} 0 0 1 ${width.toFixed(5)} ${height.toFixed(5)} `
							+ `a ${width.toFixed(5)} ${height.toFixed(5)} 0 0 1 ${(-width).toFixed(5)} ${(-height).toFixed(5)} Z" />\n`;
						break;
					} case (1): {
						string += `<path class="color-${colorIndex2}" d="`
							+ `M ${(x + width).toFixed(5)} ${y.toFixed(5)} `
							+ `a ${width.toFixed(5)} ${height.toFixed(5)} 0 0 1 ${(-width).toFixed(5)} ${height.toFixed(5)} `
							+ `a ${width.toFixed(5)} ${height.toFixed(5)} 0 0 1 ${width.toFixed(5)} ${(-height).toFixed(5)} Z" />\n`;
						break;
					}
				}
				break;
			} case (3): {
				string += `<circle class="color-${colorIndex2}" cx="${(x + width / 2).toFixed(5)}" cy="${(y + height / 2).toFixed(5)}" r="${(width / 2).toFixed(5)}" />\n`;
				break;
			} case (4): {
				string += `<circle class="color-${colorIndex2}" cx="${(x + width / 2).toFixed(5)}" cy="${(y + height / 2).toFixed(5)}" r="${(width / 2).toFixed(5)}" />\n`;
				string += `<circle class="color-${colorIndex1}" cx="${(x + width / 2).toFixed(5)}" cy="${(y + height / 2).toFixed(5)}" r="${(width / 2 * .7).toFixed(5)}" />\n`;
				break;
			} case (5): {
				const rotationIndex = Math.floor(Math.random() * 2);
				switch (rotationIndex) {
					case (0): {
						string += `<path class="color-${colorIndex2}" d="`
							+ `M ${x.toFixed(5)} ${(y + width).toFixed(5)} `
							+ `l ${width.toFixed(5)} ${(-height).toFixed(5)} `
							+ `v ${height} `
							+ `Z" />\n`;
						break;
					} case (1): {
						string += `<path class="color-${colorIndex2}" d="`
							+ `M ${x.toFixed(5)} ${y.toFixed(5)} `
							+ `l ${width.toFixed(5)} ${height.toFixed(5)} `
							+ `h ${(-width).toFixed(5)} `
							+ `Z" />\n`;
						break;
					}
				}
				break;
			}
		}
		return string;
	} else {
		for (let row = 0; row < subTiles; row++) {
			for (let column = 0; column < subTiles; column++) {
				string += generateTile({
					x: x + column * width / subTiles,
					y: y + row * height / subTiles,
					width: width / subTiles,
					height: height / subTiles,
					depth: depth + 1,
				});
			}
		}
		return string;
	}
};

const generateTiles = () => {
	let string = "";
	for (let row = 0; row < tileRows; row++) {
		for (let column = 0; column < tileColumns; column++) {
			string += (generateTile({ x: column, y: row, width: 1, height: 1, depth: 1 }));
		}
	}
	return string;
};

console.time();

const svg = new DOMParser().parseFromString([
	`<svg viewBox="0 0 ${tileColumns} ${tileRows}" xmlns="http://www.w3.org/2000/svg">`,
	`<style>`,
	await (await self.fetch("./svg.css")).text(),
	`</style>`,
	generateTiles(),
	`</svg>`
].join("\n"), "image/svg+xml");

svg.documentElement.style.setProperty("--random-1", Math.random().toString());
svg.documentElement.style.setProperty("--random-2", Math.random().toString());
svg.documentElement.style.setProperty("--random-3", Math.random().toString());

document.documentElement.style.setProperty("--background-image", `url("${URL.createObjectURL(new Blob([svg.documentElement.outerHTML], { type: "image/svg+xml" }))}")`);

console.timeEnd();

export { };
