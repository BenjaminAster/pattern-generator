
const CSS = `
:root {
	color-scheme: dark light;

	--hue: calc(var(--random-1) * 360deg);
	--color-0: hsl(var(--hue) 80% 70%);
	--color-1: hsl(var(--hue) 50% 30%);
	--color-2: white;
	--color-3: black;
}

.color-0 {
	--color: var(--color-0);
}

.color-1 {
	--color: var(--color-1);
}

.color-2 {
	--color: var(--color-2);
}

.color-3 {
	--color: var(--color-3);
}

path, circle, rect {
	fill: var(--color);
}
`;

const workerFunction = (/** @type {{ CSS: string }} */ { CSS }) => {
	const tileColumns = 8 + Math.floor(Math.random() * 4);
	const tileRows = tileColumns;

	const maxColors = 4;

	const generateTile = (/** @type {{ x: number, y: number, width: number, height: number, depth: number }} */ { x, y, width, height, depth }) => {
		let string = "";
		if (depth > 2 || Math.random() < .5) {
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
			const subTiles = 2 + Math.floor(Math.random() * 2);
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

	self.addEventListener("message", async (/** @type {MessageEvent} */ { data: { type, accentColorHue } }) => {
		if (type === "generate-pattern-svg") {
			// const CSS = await (await self.fetch("./svg.css")).text();
			const randomNumbersCSS = [
				`--random-1: ${accentColorHue.toString()}`,
			].join("; ");
			self.postMessage({
				type: "pattern-svg-generated",
				SVG: [
					`<svg viewBox="0 0 ${tileColumns} ${tileRows}" xmlns="http://www.w3.org/2000/svg" style="${randomNumbersCSS}">`,
					`<style>`,
					CSS,
					`</style>`,
					generateTiles(),
					`</svg>`
				].join("\n"),
			});
		} else throw new Error("unknown message type");
	});
};

const worker = new Worker(URL.createObjectURL(new Blob(
	[`(${workerFunction.toString()})(${JSON.stringify({ CSS })})`],
	{ type: "application/javascript" },
)));

const generatePattern = async () => {
	const accentColorHue = Math.random();
	worker.postMessage({ type: "generate-pattern-svg", accentColorHue });
	const { SVG } = await new Promise((resolve) => {
		worker.addEventListener("message", ({ data: { type, SVG } }) => {
			if (type === "pattern-svg-generated") {
				resolve({ SVG });
			} else throw new Error("unknown message type");
		});
	});
	return { SVG, accentColorHue };
};

export default generatePattern;
