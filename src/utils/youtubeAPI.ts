// src/utils/youtubeAPI.ts
import axios from 'axios';

const API_KEY = 'AIzaSyCPMsD8CvSgwwinnSUiEPvEPo2DwEldcjo'; // YouTube Data API 키

export const fetchVideoDuration = async (videoId: string) => {
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const { duration } = response.data.items[0].contentDetails;
    return convertISO8601ToHMS(duration);
  } catch (error) {
    console.error('Error fetching video duration:', error);
    return null;
  }
};

const convertISO8601ToHMS = (duration: string): string => {
  // const regex = /PT(\d+H)?(\d+M)?(\d+S)?/;
  const hours = duration.match(/\d+H/)?.[0].replace('H', '') || '00';
  const minutes = duration.match(/\d+M/)?.[0].replace('M', '') || '00';
  const seconds = duration.match(/\d+S/)?.[0].replace('S', '') || '00';
  return `${hours}:${minutes}:${seconds}`;
};
