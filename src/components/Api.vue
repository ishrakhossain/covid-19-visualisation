<template>
  
  <div id="api" class = "container">
    <div class = "row mt-4" v-if="arrPositive.length>0">
      <div class="col text-center">
        <h2>Positive</h2>
        <Linechart :chartData = "arrPositive" :options = "chartOptions"  label = "positive" class = "chart"></Linechart>
      </div>
    </div>
    <div class = "row mt-4" v-if="arrHospitalised.length>0">
      <div class="col text-center">
        <h2>Hospitalised</h2>
        <Linechart :chartData = "arrHospitalised" :options = "chartOptions"  label = "positive" class="chart"></Linechart>
      </div>
    </div>
    <div class = "row mt-4" v-if="arrInIcu.length>0">
      <div class="col text-center">
        <h2>InICU</h2>
        <Linechart :chartData = "arrInIcu" :options = "chartOptions"  label = "positive" class = 'chart'></Linechart>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
import moment from 'moment';

import Linechart from '@/components/Linechart';


export default {
    name: 'Api',
    components: {
        Linechart
    },
    data(){
        return{
        arrPositive: [],
        arrHospitalised :  [],
        arrInIcu : [],
        arrOnVentelator: [],
        arrRecovered : [],
        arrDeaths: [],
        chartoptions: {
          responsive: true,
          maintainAspectRatio: false,
        }
      };  
    },async created(){
        const {data} = await axios.get ("https://api.covidtracking.com/us/daily");
        data.forEach(d => {
            const date = moment(d.date, "YYYYMMDD").format("MM/DD");

            const  {
                positive,
                hospitalizedCurrently,
                inIcuCurrently,
                onVentilatorCurrently,
                recovered,
                death

            } = d;
            this.arrPositive.push({date, total: positive} );
            this.arrHospitalised.push({date, total:hospitalizedCurrently} );
            this.arrInIcu.push({date, total: inIcuCurrently} );
            this.arrOnVentelator.push({date, total: onVentilatorCurrently} );
            this.arrRecovered.push({date, total: recovered} );
            this.arrDeaths.push({date, total: death} );

            console.log(this.arrPositive)
            
        })
        
    }
}
</script>


<style>
  .chart{
    margin-left: 100px;
    margin-right: 100px;
  }
</style>
