import { count } from "console";
import Action from "./types/Action";

export const plus = (count: number) => ({
  type: 'counter/plus',
  payload: count,
});

export const minus = (count: number): Action => ({
  type: 'counter/minus',
  payload: count,
});