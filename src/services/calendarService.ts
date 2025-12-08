import axios from "axios";

const calenderClient = axios.create({
  baseURL: import.meta.env.VITE_GOOGLE_CALENDAR_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCalendarEvents = async (from: string, to: string) => {
  const env = import.meta.env;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = await calenderClient.get<any>(
    `${encodeURIComponent(env["VITE_GOOGLE_CALENDAR_ID"])}/events?key=${
      import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY
    }&timeMin=${from}&timeMax=${to}&singleEvents=true&orderBy=startTime`,
  );

  return response?.data.items || [];
};
