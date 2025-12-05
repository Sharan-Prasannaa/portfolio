import { API_URL } from "./apiClient";

export const fetchAbout = () =>
  fetch(API_URL + "about/").then(res => res.json());

export const fetchSkills = () =>
  fetch(API_URL + "skills/").then(res => res.json());

export const fetchContact = () =>
  fetch(API_URL + "contact/").then(res => res.json());

export const fetchExperience = () =>
  fetch(API_URL + "contact/").then(res => res.json());

export const fetchProjects = () =>
  fetch(API_URL + "contact/").then(res => res.json());