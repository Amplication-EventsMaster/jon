import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TimeSlotWhereInput = {
  endTime?: IntNullableFilter;
  id?: StringFilter;
  startTime?: IntNullableFilter;
};
