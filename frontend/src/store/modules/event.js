import event from "@/api/event";

const state = () => ({
  all: [],
});

const getters = {
  getEventById: (state) => (id) => {
    return state.all.find((event) => event.id == id);
  },
};

const actions = {
  async getAllEvents({commit}) {
    const events = await event.getEvents();
    commit("setEvents", events);
  },
};

const mutations = {
  setEvents(state, events) {
    state.all = events;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
