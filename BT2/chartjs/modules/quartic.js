import { XoAxis, YoAxis, updateChart } from './utils.js'

const quartic = (a, b, c, step, chart, color) => {

	let labels = []
	let data = []

	const scope = { a: a, b: b, c: c }
	const fx = math.evaluate('f(x) = a*x^4 + b*x^2 + c', scope)

	const points = math.evaluate([0,
		'sqrt(-b/2*a)',
		'-sqrt(-b/2*a)',
		'sqrt(-b/6*a)',
		'-sqrt(-b/6*a)'
	], scope).sort((lhs, rhs) => lhs - rhs)


	let minX = Math.min(...points) - 1
	let maxX = Math.max(...points) + 1

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
				min: minX > 1 ? -1 : minX - 1,
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
				min: minY > 1 ? -1 : minY - 1,
				max: maxY + 1,
				grid: {
					display: false
				}
			}
		}

		chart.update()
	})



}
export default quartic