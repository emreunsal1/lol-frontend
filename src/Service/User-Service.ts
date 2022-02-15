import axios from "axios";

const userService = axios.create({
  baseURL: "https://leagueoflegends-backend.herokuapp.com/api/user",
});

export const getUser = (loginUser:string) => userService.get(`/${loginUser}`);

export const getUserCharacterMasteries = (loginUser:string) => userService.get(`/${loginUser}/masteries`);
