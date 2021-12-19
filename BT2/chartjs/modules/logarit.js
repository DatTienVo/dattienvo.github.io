import { XoAxis, YoAxis, updateChart } from './utils.js'

const logarit = (a, step, chart, color) => {

	if (a < 0 || a == 1) return

	let labels = []
	let data = []

	let points = [1, a].sort((lhs, rhs) => lhs - rhs)

	let minX = 0.1
	let maxX = Math.max(...points) + 2

	let maxY = -Infinity,
		minY = Infinity
	for (let x = minX; x <= maxX; x += step) {
		labels.push(x)

		let y = Math.log(x) / Math.log(a)
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

export default logarit