import { API_URL } from "./apiClient";

export const fetchAbout = () =>
  fetch(API_URL + "about/").then(res => res.json());

export const fetchSkills = () =>
  fetch(API_URL + "skills/").then(res => res.json());
