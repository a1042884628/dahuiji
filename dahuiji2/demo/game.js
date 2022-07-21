// 获取手机的宽度和高度
const width = wx.getSystemInfoSync().screenWidth;
const height = wx.getSystemInfoSync().screenHeight;
console.log(width, height);


// draw1();
// function draw1() {
// 	// 1 获取canvas 上下文对象
// 	const canvas=wx.createCanvas(); /*  画布 */
// 	// 2 获取 笔
// 	const ctx=canvas.getContext("2d");
// 	// 2.1 把笔换成白色
// 	ctx.strokeStyle="#fff";
// 	// 3 先定点 再连线
// 	ctx.moveTo(0,0);
// 	// 4 定终点
// 	ctx.lineTo(300,300);
// 	// 5 画出来
// 	ctx.stroke();
// }	
// draw2();
// function draw2() {
// 	const canvas = wx.createCanvas(); /*  画布 */
// 	const ctx = canvas.getContext("2d");

// 	//  1 new出来一个图片对象
// 	const img = wx.createImage();
// 	console.log(img);
// 	//  2 在图片下载完毕
// 	img.onload = function() {
// 		ctx.drawImage(
// 			// 1 画哪个图片
// 			img,
// 			// 2 画在画布的x
// 			0,
// 			// 3 画在画布的y
// 			0,
// 			// 4 画多宽
// 			width,
// 			// 5 画多高
// 			height,
// 		)
// 	}
// 	//  3 制定图片的路径
// 	img.src = "./images/bg.jpg";
// }


// draw3();

// function draw3() {
// 	const canvas = wx.createCanvas();
// 	const ctx = canvas.getContext("2d");
// 	const img = wx.createImage();
// 	img.onload = function() {
// 		// 开始定时器
// 		let top = 0;
// 		setInterval(() => {

// 			// 清除旧的图像
// 			ctx.clearRect(0, 0, width, height);


// 			top++;
// 			ctx.drawImage(
// 				// 1 画哪个图片
// 				img,
// 				// 2 画在画布的x
// 				0,
// 				// 3 画在画布的y
// 				-height+top,
// 				// 4 画多宽
// 				width,
// 				// 5 画多高
// 				height,
// 			)


// 			ctx.drawImage(
// 				// 1 画哪个图片
// 				img,
// 				// 2 画在画布的x
// 				0,
// 				// 3 画在画布的y
// 				top,
// 				// 4 画多宽
// 				width,
// 				// 5 画多高
// 				height,
// 			)
// 		}, 10);
// 	}
// 	//  3 制定图片的路径
// 	img.src = "./images/bg.jpg";
// }


// loop();
// function loop(params){
// 	// console.time("开始了");
// 	console.count("123");
// 	// requestAnimationFrame(loop);
// 	// console.timeEnd("开始了");
// 	loop();
// }


draw4();

function draw4() {
	const canvas = wx.createCanvas();
	const ctx = canvas.getContext("2d");
	const img = wx.createImage();
	img.onload = function() {
		// 开启定时器
		let top = 0;
		loop();

		function loop(params) {
			ctx.clearRect(0, 0, width, height);
			top++;
			// 当背景往下移动到一个屏幕的高度的时候 重置 top =0
			if (top === height) {
			        top = 0;
			      }
			ctx.drawImage(
				// 1 画哪个图片
				img,
				// 2 画在画布的x
				0,
				// 3 画在画布的y
				-height + top,
				// 4 画多宽
				width,
				// 5 画多高
				height,
			)
			
			ctx.drawImage(
				// 1 画哪个图片
				img,
				// 2 画在画布的x
				0,
				// 3 画在画布的y
				top,
				// 4 画多宽
				width,
				// 5 画多高
				height,
			)
			requestAnimationFrame(loop);
		}
	}
	//  3 制定图片的路径
	img.src = "./images/bg.jpg";
}
