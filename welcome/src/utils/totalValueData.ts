import {Chart, Plugin} from 'chart.js';

const TotalValuePlugin: Plugin<'doughnut'> = {
	id: 'totalValuePlugin',
	afterDraw(chart) {
		const {ctx, chartArea, data} = chart;
		const {top, left, width, height} = chartArea;

		const total = data.datasets?.reduce((acc, dataset) => {
			return (
				acc + dataset.data.reduce((datasetAcc, value) => datasetAcc + value, 0)
			);
		}, 0);

		if (total !== undefined) {
			ctx.restore();
			const fontSize = (height / 100).toFixed(2);
			ctx.font = `${fontSize}em sans-serif`;
			ctx.textBaseline = 'middle';
			ctx.fillStyle = '#000000';
			const text = `Total: ${total}`;
			const textX = Math.round(
				(width - ctx.measureText(text).width) / 2 + left,
			);
			const textY = Math.round((height - Number(fontSize)) / 2 + top);
			ctx.fillText(text, textX, textY);
			ctx.save();
		}
	},
};

export default TotalValuePlugin;
