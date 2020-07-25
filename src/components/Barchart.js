import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

export default function Barchart(props) {
	const options = {
		states: {
			normal: {
				filter: {
					type: 'none',
					value: 0,
				}
			},
			hover: {
				filter: {
					type: 'none',
					value: 0,
				}
			}
		},
		dataLabels: {
			enabled: false,
		},
		chart: {
			type: 'bar',
			height: 250,
			width: 300,
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '15%',
				endingShape: 'rounded'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		xaxis: {
			categories: props.categories,
			axisBorder: {
				show: false,
			}
		},
		yaxis: {
			title: {
				text: ''
			},
			axisBorder: {
				show: false,
			}
		},
		legend: {
			show: false
		},
		grid: {
			show: false
		},
		fill: {
			opacity: 1
		},
		colors: ['rgb(69,80,178)', 'rgb(202,202,202)'],
		tooltip: {
			y: {
				formatter: function (val) {
					return "$ " + val + " thousands"
				}
			}
		}
	}
	return <ReactApexChart options={options} series={props.series} type="bar" height={400} width={800} />
}

