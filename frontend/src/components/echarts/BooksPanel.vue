<template lang="">
  <v-container class="pa-0">
    <v-sheet border class="pa-2 mb-4">
      <v-row>
        <v-col class="text-subtitle-1 font-weight-bold"> Books </v-col>
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
            :dataset="distributionByPublishedYearDataset"
            :title="distributionByPublishedYearOption.title"
            :xAxisName="distributionByPublishedYearOption.xAxisName"
            :yAxisName="distributionByPublishedYearOption.yAxisName"
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
            :dataset="distributionByLanguage"
            :title="distributionByLanguageOption.title"
            :seriesName="distributionByLanguageOption.seriesName"
          />
        </v-col>
        <v-col>
          <PieChart
            v-if="distributionByLanguage.length"
            id="distribution-by-avg-rating-pie-chart"
            :dataset="distributionByAvgRating"
            :title="distributionByAvgRatingOption.title"
            :seriesName="distributionByAvgRatingOption.seriesName"
          />
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>
<script>
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
      bookItems: [],
      itemsPerPage: 5,
      headers: [
        {title: "Title", key: "title", align: "start"},
        {title: "Book Count", key: "books_count", align: "end"},
        {title: "Average Rating", key: "average_rating", align: "start"},
        {title: "Ratings Count", key: "ratings_count", align: "end"},
        {title: "Publish Yeasr", key: "original_publication_year", align: "start"},
      ],
      distributionByPublishedYearDataset: [],
      distributionByPublishedYearOption: {
        title: "Distribution of Published Year",
        xAxisName: "Published Year",
        yAxisName: "Amount of Books",
      },
      distributionByLanguage: [],
      distributionByLanguageOption: {
        title: "Distribution of Language",
        seriesName: "Language",
      },
      distributionByAvgRating: [],
      distributionByAvgRatingOption: {
        title: "Distribution of Avg Rating",
        seriesName: "Avg Rating",
      },
    };
  },
  computed: mapState({
    books: (state) => state.book.all,
  }),
  async mounted() {
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
