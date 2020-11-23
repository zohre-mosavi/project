// import React from 'react';
// import {Line} from 'react-chartjs-2';

// const state = {
//   labels: ['January', 'February', 'March',
//            'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       fill: false,
//       lineTension: 0.5,
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: randomNumber
//     }
//   ]
// }

// export default class App extends React.Component {
//   constructor(){
//     this.state={
//       data:randomNumber[i]
      
//     }
//   }

//   randomize=()=>{
//     var randomNumber=[];
//     var i;
//     for(i=0; i<5; i++)
//     {
//        randomNumber[i] = 1 + Math.floor(Math.random() * 20);
//     }
//     this.setState({


//     })
//   }

//   componentDidMount(){
//     randomize();
//   }
//   render() {
//     return (
//       <div>
//         <Line
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//       </div>
//     );
//   }
// }
import React from 'react';
import './App.css';
import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Pie, Doughnut} from 'react-chartjs-2';


var randomnumber=[];
for(var i=0;i<30;i++)
{
  randomnumber[i]=-20+Math.floor(Math.random()*120);
}
// var days=[];
// for(var j=1;j<=30;j++)
// {
//   var x=days[j];
// }
const state = {
  labels: ['1', '2', '3',
           '4', '5','6', '7', '8',
           '9', '10','11', '12', '13',
           '14', '15','16', '17', '18',
           '19', '20','21', '22', '23',
           '24', '25','26', '27', '28',
           '29', '30'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,100,12,100)',
      borderColor: 'rgba(170,10,10,10)',
      borderWidth: 2,
      data: randomnumber
    }
  ]
}

const stat = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: randomnumber
      
    }
  ]
}
const sta = {
  labels: ['red', 'yellow', 'green',
  'blue', 'darkblue'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: randomnumber
    }
  ]
}
export default class App extends React.Component {
  render() {
    return (
      <div class="on_line">
        <div class="sty">
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'دما°',
              fontSize:20
            },
            
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
        <div class="sty">
        <Bar
          data={stat}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
        <div class="sty">
         <Pie
          data={sta}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
          <div class="sty">
        <Doughnut
          data={sta}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
      </div>
    );
  }
}
