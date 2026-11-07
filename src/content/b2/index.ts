// Family keys used by these topics live in ../families.ts (the shared vocabulary).
import type { Topic } from "../schema";
import { couldWasAbleToAndCouldHave } from "./grammar/could-was-able-to-and-could-have";
import { describingCertaintyInThePast } from "./grammar/describing-certainty-in-the-past";
import { mixedConditionals } from "./grammar/mixed-conditionals";
import { needntHaveAndDidntNeedTo } from "./grammar/neednt-have-and-didnt-need-to";
import { thirdConditional } from "./grammar/third-conditional";
import { wishForPastRegrets } from "./grammar/wish-for-past-regrets";

export const b2Topics: Topic[] = [
  thirdConditional,
  mixedConditionals,
  wishForPastRegrets,
  describingCertaintyInThePast,
  needntHaveAndDidntNeedTo,
  couldWasAbleToAndCouldHave,
];
