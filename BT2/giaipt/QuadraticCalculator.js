// Hàm tính PT bậc hai và trả về kết quả dưới dạng công thức latex
function quadraticCalculator(a, b, c) {

	let delta = b*b - 4*a*c 
	
	 	
	let result = `Ta có phương trình: $$\\begin{aligned} F(x) &= ${a}x^2` + 
				(b >= 0 ? ' + ' : '') + `${b}x` +
				(c >= 0 ? ' + ' : '') + `${c} = 0\\\\`
	

	
	
	if (a === 0) {
		result += '&\\Leftrightarrow' + 
					`${b}x` + 	
					(c >= 0 ? ' + ' : '') + `${c} = 0\\\\`

		if (b !== 0)
			result += 
					`&\\Leftrightarrow x = \\frac{${-c}}{${b}} = ${(-c/b).toFixed(3)}\\end{aligned}$$`


		else {
			if (c !== 0) 
			result += '\\\\ &\\Rightarrow \\text{Hệ vô nghiệm} \\end{aligned}$$'
			else
			result += '\\\\ &\\Rightarrow \\text{Hệ vô số nghiệm} \\end{aligned}$$'
		}
	} else {

		result += `\\Rightarrow \\Delta &= b^2 - 4ac = ${delta.toFixed(3)}\\\\ `
		
		
		if (delta > 0) {
			
			let x1 = -(b + Math.sqrt(delta))/(2.0*a); x1 = x1.toFixed(3)
			let x2 = -(b - Math.sqrt(delta))/(2.0*a); x2 = x2.toFixed(3)
		
			result += '\\Rightarrow \\Delta &> 0\\\\ \\text{Phương trình có hai nghiệm:} &\\Leftrightarrow'  +
			` \\begin{cases}x_1 =  \\cfrac{-b + \\sqrt{\\Delta}}{2a}\\\\ \\\\ x_2 = \\cfrac{-b - \\sqrt{\\Delta}}{2a}\\end{cases}\\\\ \\\\ ` +
			`&\\Leftrightarrow \\begin{cases}x_1 = \\cfrac{${(-b - Math.sqrt(delta)).toFixed(3)}}{${(2.0*a).toFixed(3)}}\\\\ \\\\ x_2 = \\cfrac{${(-b + Math.sqrt(delta)).toFixed(3)}}{${(2.0*a).toFixed(3)}}\\end{cases}` +
			` \\\\ \\\\ &\\Leftrightarrow \\begin{cases}x_1 = ${x1}\\\\x_2 = ${x2}\\end{cases}`  
			result += ` \\\\ \\text{Cực trị của hàm số là: } CT= \\cfrac{-b}{2a} = \\cfrac{${-b}}{${2*a}} = ${(-b/(2*a)).toFixed(2)}`
			result += '\\end{aligned}$$'

			
		} else if (delta === 0) {
			let x = -b / (2.0*a);
			result += '\\Rightarrow \\Delta &= 0\\\\ (*) &\\Leftrightarrow ' +
			`x_1 = x_2 = \\frac{-b}{2a} = ${x.toFixed(3)}\\end{aligned}$$`
		} else {

			let x1 = (-b)/(2.0*a) ; x1 = x1.toFixed(3)
			let x2 = Math.sqrt(Math.abs(delta))/(2.0*a) ; x2 = x2.toFixed(3)
			
			result += '\\Rightarrow \\Delta &< 0\\\\  \\text{Phương trình có hai nghiệm:} &\\Leftrightarrow'
			
			result += `\\begin{cases}x_1 = \\cfrac{-b + i\\sqrt{\\lvert \\Delta \\rvert} }{2a}\\\\ \\\\ `
			result += `x_2 = \\cfrac{-b - i\\sqrt{\\lvert \\Delta \\rvert} }{2a} \\end{cases}\\\\ \\\\  `
			
			result += `&\\Leftrightarrow \\begin{cases}x_1 = ${x1} +  ${x2} i  \\\\  \\\\`
			result += `x_2 = ${x1} - ${x2} i  \\end{cases} \\\ \\\ `	
			
			result += `\\end{aligned}$$`
		}
			
	}
	
	return result	
}