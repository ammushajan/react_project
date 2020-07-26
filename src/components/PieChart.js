import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function PieChart(props) {
	const options = {
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false
		},
		colors: props.color,
		plotOptions: {
			pie: {
				donut: {
					size: '85%',
					background: 'transparent',
				}
			}
		},
		responsive: [{
			breakpoint: 40,
			options: {
				chart: {
					height: 200,
					width: 200,
				},
			}
		}]
	}
	return <ReactApexChart options={options} series={props.series} type="donut" height={300} width={300} />
}