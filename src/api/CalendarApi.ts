import axios from "axios";

export const CalendarApi = {
  getPublicHolidays(year: string) {
    return axios({
      method: "get",
      url: `https://date.nager.at/api/v3/PublicHolidays/${year}/ua`,
    });
  },
};
