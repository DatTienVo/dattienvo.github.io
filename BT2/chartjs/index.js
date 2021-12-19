import quadratic from './modules/quadratic.js'
import cubic from './modules/cubic.js'
import quartic from './modules/quartic.js'
import logarit from './modules/logarit.js'

import { sinFunction, cosFunction, tanFunction } from './modules/trigonometric.js'



let step = 0.1
let color = 'red'

let a = 0
let b = 0
let c = 0
let d = 0

let chartType = 'bacBon'
let myChart



// xử lý ng dùng nhập giá vào form
window.addEventListener("input", event => {
	switch (event.target.id) {

		case 'step':
			step = parseFloat(event.target.value);
			drawChart();
			break

		case 'a-input':
			a = parseFloat(event.target.value);
			drawChart();
			break
		case 'b-input':
			b = parseFloat(event.target.value);
			drawChart();
			break
		case 'c-input':
			c = parseFloat(event.target.value);
			drawChart();
			break
		case 'd-input':
			d = parseFloat(event.target.value);
			drawChart();
			break

		case 'char-type':
			chartType = event.target.value;
			drawChart();
			break;
	}
})




// xử lý chọn đồ thị
for (const button of document.querySelectorAll('.buttonItem')) button.addEventListener('click', event => {
	chartType = event.target.id
	drawChart()
})



/// xử lý chọn màu
for (const button of document.querySelectorAll('.chonMau-btn')) button.addEventListener('click', event => {
	switch (event.target.id) {
		case 'do': color = 'red'; break;
		case 'cam': color = 'orange'; break;
		case 'vang': color = 'yellow'; break;
		case 'luc': color = 'green'; break;
		case 'lam': color = 'blue'; break;
		case 'tim':color='#990099';break;

	}
	
	drawChart()
})



// vẽ đồ thị
const drawChart = () => {

	if (step === 0)
		return

	switch (chartType) {
		case 'bacHai':
			quadratic(a, b, c, step, myChartEle, color)
			break
		case 'bacBa':
			cubic(a, b, c, d, step, myChartEle, color)
			break
		case 'bacBon':
			quartic(a, b, c, step, myChartEle, color)
			break
		case 'logarit':
			logarit(a, step, myChartEle, color)
			break
		case 'sin':
			sinFunction(a, step, myChartEle, color)
			break
		case 'cos':
			cosFunction(a, step, myChartEle, color)
			break
		case 'tan':
			tanFunction(a, step, myChartEle, color)
	}
	myChartEle.options.elements.point.radius = 0;
	myChartEle.update()
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChartEle = new Chart(ctx, {
	type: 'scatter',
	data: [],
	options: {
		maintainAspectRatio: false,
		responsive: true,
	},
});




//quadratic(a, b, c, step, myChartEle, color)
drawChart()