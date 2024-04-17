<template lang="">
  <v-container class="pa-0">
    <v-sheet border class="pa-2 mb-4">
      <v-row>
        <v-col class="text-subtitle-1 font-weight-bold"> Books </v-col>
        <v-col v-if="currentDateTime" class="d-flex flex-row-reverse text-body-2">Date: {{ currentDateTime }}</v-col>
      </v-row>
      <v-row>
        <v-col>
          <TableChart :items="bookItems" :itemsPerPage="itemsPerPage" :headers="headers" />
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet border class="pl-2 mb-4">
      <v-row>
        <v-col>
          <BarChart id="bar-chart" :option="barOption" />
        </v-col>
        <v-col>
          <PieChart id="pie-chart" :option="pieOption" />
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet border class="pl-2">
      <v-row>
        <v-col>
          <StackedBarChart id="stacked-bar-chart" :option="stackedBarOption" />
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>
<script>
import moment from "moment";
import {mapState} from "vuex";

import BarChart from "@/components/echarts/widgets/BarChart.vue";
import PieChart from "@/components/echarts/widgets/PieChart.vue";
import TableChart from "@/components/echarts/widgets/TableChart.vue";
import StackedBarChart from "@/components/echarts/widgets/StackedBarChart.vue";

export default {
  name: "EChartsView",
  components: {
    BarChart,
    PieChart,
    TableChart,
    StackedBarChart,
  },
  data() {
    return {
      currentDateTime: null,
      bookItems: [],
      itemsPerPage: 5,
      headers: [
        {title: "Title", key: "title", align: "start"},
        {title: "Book Count", key: "books_count", align: "end"},
        {title: "Average Rating", key: "average_rating", align: "start"},
        {title: "Ratings Count", key: "ratings_count", align: "end"},
        {title: "Publish Yeasr", key: "original_publication_year", align: "start"},
      ],
      barOption: {
        title: {
          text: "Referer of a Website",
          subtext: "Fake Data",
          left: "center",
        },
        tooltip: {},
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            name: "bar",
            data: [23, 24, 18, 25, 27, 28, 25],
          },
          {
            type: "line",
            name: "line",
            data: [23, 24, 18, 25, 27, 28, 25],
          },
        ],
      },
      pieOption: {
        title: {
          text: "Referer of a Website",
          subtext: "Fake Data",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              {value: 1048, name: "Search Engine"},
              {value: 735, name: "Direct"},
              {value: 580, name: "Email"},
              {value: 484, name: "Union Ads"},
              {value: 300, name: "Video Ads"},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      stackedBarOption: {
        title: {
          text: "World Population",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
        },
        series: [
          {
            name: "2011",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230],
          },
          {
            name: "2012",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807],
          },
        ],
      },
    };
  },
  computed: mapState({
    books: (state) => state.book.all,
  }),
  async created() {
    this.getCurrentDateTime();
    await this.$store.dispatch("book/getAllBooks");
    this.bookItems = this.books.map((book) => {
      return {
        title: book.title,
        books_count: book.books_count,
        language_code: book.language_code,
        average_rating: book.average_rating,
        average_rating_rounded: book.average_rating_rounded,
        ratings_count: book.ratings_count,
        original_publication_year: book.original_publication_year,
      };
    });
  },
  mounted() {
    setInterval(this.getCurrentDateTime, 1000);
  },
  methods: {
    getCurrentDateTime() {
      this.currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
    },
  },
};
</script>
<style lang=""></style>
