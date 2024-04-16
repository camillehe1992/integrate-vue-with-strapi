<template lang="">
  <v-container fuild class="border">
    <v-row>
      <v-col class="text-subtitle-1 font-weight-bold"> Books </v-col>
      <v-col class="d-flex flex-row-reverse text-body-2">Date: {{ currentDateTime }}</v-col>
    </v-row>
    <v-row>
      <v-col>
        <BarChart id="bar-chart" :option="barOption" />
      </v-col>
      <v-col>
        <PieChart id="pie-chart" :option="PieOption" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <TableChart :items="bookItems" :itemsPerPage="itemsPerPage" :headers="headers" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import moment from "moment";
import {mapState} from "vuex";
import BarChart from "@/components/echarts/widgets/BarChart.vue";
import PieChart from "@/components/echarts/widgets/PieChart.vue";
import TableChart from "@/components/echarts/widgets/TableChart.vue";
export default {
  name: "EChartsView",
  components: {
    BarChart,
    PieChart,
    TableChart,
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
      PieOption: {
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
    };
  },
  computed: mapState({
    books: (state) => state.book.all,
  }),
  async created() {
    await this.$store.dispatch("book/getAllBooks");
    this.bookItems = this.books.map((book) => {
      return {
        title: book.title,
        books_count: book.books_count,
        language_code: book.language_code,
        average_rating: book.average_rating,
        ratings_count: book.ratings_count,
        original_publication_year: book.original_publication_year,
      };
    });
  },
  mounted() {
    this.currentDateTime = moment().format();
  },
};
</script>
<style lang=""></style>
