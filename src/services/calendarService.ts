import axios from "axios";

const calenderClient = axios.create({
  baseURL: import.meta.env.VITE_GOOGLE_CALENDAR_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCalendarEvents = async (from: string, to: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = await calenderClient.get<any>(
    `${import.meta.env.VITE_POSTS_URL}/calendar?from=${from}&to=${to}`
  );

  return response?.data;
};
