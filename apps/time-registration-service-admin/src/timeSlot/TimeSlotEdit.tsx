import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const TimeSlotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="EndTime" source="endTime" />
        <NumberInput step={1} label="StartTime" source="startTime" />
      </SimpleForm>
    </Edit>
  );
};
