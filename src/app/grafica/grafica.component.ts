import { Component,OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
constructor(){}
ngOnInit(){
 var myChart= new Chart("myChart", {
    type: 'line',
    data: {
      labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', 
    '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021' ],
      datasets: [{
        label: 'Temperatura promedio anual',
        data: [25.7, 25.5, 25.7, 25.8,25.6,25.7, 25.9, 26.0,25.9, 26.1, 25.3,26.4,25.9,25.9,25.8,
          26.0, 26.3, 26.3, 26.2, 26.8,  26.9, 26.6],
        borderWidth: 2,
        backgroundColor: [
          'rgb(238, 157, 0)'
        ],
        borderColor:[
          'rgb(238, 38, 0)'
        ]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  };
}

