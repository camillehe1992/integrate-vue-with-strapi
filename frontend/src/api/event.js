import EVENTS from "./events.json";

const _events = EVENTS;

export default {
  async getEvents() {
    return _events;
  },
};
