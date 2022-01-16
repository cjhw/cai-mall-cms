<template>
  <div class="bar-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'
import BaseEchart from '@/base-ui/echarts'
import { IDataType } from '../types'

import { convertData } from '../utils/convert-data'

const props = withDefaults(
  defineProps<{
    title?: string
    mapData: IDataType[]
  }>(),
  {
    title: ''
  }
)

const options = computed(() => {
  return {
    backgroundColor: '#fff',
    title: {
      text: '全国销量统计',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return params.name + ' : ' + params.value[2]
      }
    },
    visualMap: {
      min: 0,
      max: 60000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ['高', '低'],
      inRange: {
        color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
      },
      textStyle: {
        color: '#24CFF4'
      }
    },
    geo: {
      map: 'china',
      roam: 'scale',
      emphasis: {
        areaColor: '#389BB7',
        borderColor: '#FFFFFF',
        itemStyle: {
          areaColor: '#389BB7'
        }
      }
    },
    series: [
      {
        name: '销量',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(props.mapData),
        symbolSize: 12,
        emphasis: {
          itemStyle: {
            borderColor: '#F4E925',
            borderWidth: 1
          }
        }
      },
      {
        type: 'map',
        map: 'china',
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
      }
    ]
  }
})
</script>

<style scoped></style>
