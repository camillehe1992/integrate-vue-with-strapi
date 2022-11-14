<template>
  <v-container>
    <reactive-base :app="index" :url="url" :enable-appbase="true">
      <v-row>
        <v-col cols="3">
          <multi-list
            componentId="Authors"
            dataField="authors.keyword"
            class="filter"
            title="Select Authors"
            selectAllLabel="All Authors"
          />
          <single-range
            componentId="Ratings"
            dataField="average_rating"
            :data="[
              { start: 0, end: 3, label: 'Rating < 3' },
              { start: 3, end: 4, label: 'Rating 3 to 4' },
              { start: 4, end: 5, label: 'Rating > 4' },
            ]"
            title="Book Ratings"
            class="filter"
          />
          <toggle-button
            componentId="MeetupTops"
            dataField="language_code.keyword"
            :data="languages"
            :defaultValue="['eng']"
            :multiSelect="false"
            :showFilter="true"
            title="Select Languages"
            class="filter"
          />
        </v-col>

        <v-col cols="9">
          <data-search
            componentId="SearchBox"
            placeholder="Search for books or authors"
            class="filter"
            :dataField="[
              {
                field: 'authors',
                weight: 3,
              },
              {
                field: 'authors.autosuggest',
                weight: 1,
              },
              {
                field: 'original_title',
                weight: 5,
              },
              {
                field: 'original_title.autosuggest',
                weight: 1,
              },
            ]"
          />
          <reactive-list
            componentId="SearchResult"
            dataField="original_title.keyword"
            className="result-list-container"
            :pagination="true"
            :from="0"
            :size="5"
            :react="{ and: ['SearchBox', 'Ratings', 'Authors', 'MeetupTops'] }"
          >
            <div slot="renderItem" slot-scope="{ item }">
              <v-card class="mx-auto my-3">
                <v-card-subtitle>{{ item.original_title }}</v-card-subtitle>
                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :value="item.average_rating"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>
                    <div class="grey--text ms-3">
                      {{ item.average_rating }} ({{ item.ratings_count }})
                    </div>
                  </v-row>
                  <v-row align="center" class="mx-0">
                    <v-col cols="4">
                      <div>& • {{ item.authors }}</div>
                    </v-col>
                    <v-col cols="2">
                      <div>$ • {{ item.language_code }}</div>
                    </v-col>
                    <v-col cols="6">
                      <div>Published {{ item.original_publication_year }}</div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </div>
          </reactive-list>
        </v-col>
      </v-row>
    </reactive-base>
  </v-container>
</template>

<script>
// access opensearch via proxy https://github.com/appbaseio-apps/reactivesearch-proxy-server/blob/vue/index.js
export default {
  name: "BaseSearch",
  data() {
    return {
      index: "good-books-ds",
      url: "https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io",
      languages: [
        { label: "English", value: "eng" },
        { label: "English-US", value: "en-US" },
        { label: "English-CA", value: "en-CA" },
      ],
    };
  },
};
</script>

<style>
.book-image {
  height: 150px;
  width: 110px;
  background-size: cover;
}
</style>
