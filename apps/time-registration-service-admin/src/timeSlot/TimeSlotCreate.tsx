import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const TimeSlotCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="EndTime" source="endTime" />
        <NumberInput step={1} label="StartTime" source="startTime" />
      </SimpleForm>
    </Create>
  );
};
