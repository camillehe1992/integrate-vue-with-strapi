<template lang="">
  <v-container class="pa-0">
    <v-sheet border class="pa-2 mb-4">
      <v-row>
        <v-col class="text-subtitle-1 font-weight-bold"> Books </v-col>
        <v-col v-if="currentDateTime" class="d-flex flex-row-reverse text-body-2 font-weight-bold"
          >Date: {{ currentDateTime }}</v-col
        >
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
          <BarChart
            v-if="distributionByPublishedYearDataset.length"
            id="bar-chart"
            :option="distributionByPublishedYearOption"
            :dataset="distributionByPublishedYearDataset"
          />
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet border class="pl-2">
      <v-row>
        <v-col>
          <PieChart
            v-if="distributionByLanguage.length"
            id="distribution-by-language-pie-chart"
            :option="distributionByLanguageOption"
            :dataset="distributionByLanguage"
          />
        </v-col>
        <v-col>
          <PieChart
            v-if="distributionByLanguage.length"
            id="distribution-by-avg-rating-pie-chart"
            :option="distributionByAvgRatingOption"
            :dataset="distributionByAvgRating"
          />
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>
<script>
import moment from "moment";
import * as R from "ramda";
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
      distributionByPublishedYearOption: {
        title: {
          text: "Distribution of Published Year",
          left: "left",
        },
        tooltip: {},
        xAxis: {
          data: [],
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            name: "bar",
            data: [],
          },
        ],
      },
      distributionByLanguageOption: {
        title: {
          text: "Distribution of Language",
          left: "left",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "right",
        },
        series: [
          {
            name: "Language",
            type: "pie",
            radius: "50%",
            data: [],
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
      distributionByAvgRatingOption: {
        title: {
          text: "Distribution of Avg Rating",
          left: "left",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "right",
        },
        series: [
          {
            name: "Avg Rating",
            type: "pie",
            radius: "50%",
            data: [],
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
      distributionByPublishedYearDataset: [],
      distributionByLanguage: [],
      distributionByAvgRating: [],
    };
  },
  computed: mapState({
    books: (state) => state.book.all,
  }),
  created() {
    this.getCurrentDateTime();
  },
  async mounted() {
    setInterval(this.getCurrentDateTime, 1000);
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
    this.getDistributionByPublishedYearData(this.bookItems);
    this.getDistributionByLanguageData(this.bookItems);
    this.getDistributionByAvgRatingData(this.bookItems);
  },
  methods: {
    getCurrentDateTime() {
      this.currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
    },
    getDistributionByProp(items, prop) {
      return R.collectBy(R.prop(prop), items).map((group) => {
        return {
          name: group[0][prop],
          value: group.length,
        };
      });
    },
    getDistributionByPublishedYearData(items) {
      this.distributionByPublishedYearDataset = this.getDistributionByProp(items, "original_publication_year");
    },
    getDistributionByLanguageData(items) {
      this.distributionByLanguage = this.getDistributionByProp(items, "language_code");
    },
    getDistributionByAvgRatingData(items) {
      this.distributionByAvgRating = this.getDistributionByProp(items, "average_rating_rounded");
    },
  },
};
</script>
<style lang=""></style>
