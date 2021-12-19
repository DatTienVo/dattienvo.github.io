import { calcXRange, updateChart, solveCubic, XoAxis, YoAxis } from './utils.js'



const cubic = (a, b, c, d, step, chart, color) => {

	let labels = []
	let data = []

	const scope = { a: a, b: b, c: c, d: d }
	const fx = math.evaluate('f(x) = a*x^3 + b*x^2 + c*x +d', scope)

	const points = [...solveCubic(a, b, c, d), 0, -b / 3 * a].sort((lhs, rhs) => lhs - rhs)


	let minX = Math.min(...points) - 1
	let maxX = Math.max(...points) + 1


	let changePoint = -b / (3 * a)
	if (fx(changePoint) < 0 && Math.abs(Math.abs(fx(changePoint)) - Math.abs(fx(minX))) > 20) {
		minX += 1
	} else if (fx(changePoint) > 0 && Math.abs(Math.abs(fx(changePoint)) - Math.abs(fx(maxX))) > 20) {
		maxX -= 1
	}


	minX, maxX = calcXRange(minX, maxX, (x) => fx(x), step)

	let maxY = -Infinity,
		minY = Infinity
	for (let x = minX; x <= maxX; x += step) {
		labels.push(x)

		let y = fx(x)
		data.push(y)

		maxY = Math.max(maxY, y)
		minY = Math.min(minY, y)
	}


	updateChart(chart, labels, data, color, () => {
		chart.options.plugins = {
			annotation: {
				annotations: {
					XoAxis,
					YoAxis
				}
			},
			legend: {
				display: false
			}
		}

		chart.options.scales = {
			x: {
				display: true,
				title: {
					display: true,
					//text: 'Month'
				},
				min: minX - 1,
				max: maxX + 1,
				grid: {
					display: false
				}
			},
			y: {
				display: true,
				title: {
					display: true,
					//text: 'Value'
				},
				min: minY - 1,
				max: maxY + 1,
				grid: {
					display: false
				}
			}
		}

		chart.update()


	})

}

export default cubic