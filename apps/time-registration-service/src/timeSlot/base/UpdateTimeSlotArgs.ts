/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TimeSlotWhereUniqueInput } from "./TimeSlotWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TimeSlotUpdateInput } from "./TimeSlotUpdateInput";

@ArgsType()
class UpdateTimeSlotArgs {
  @ApiProperty({
    required: true,
    type: () => TimeSlotWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotWhereUniqueInput)
  @Field(() => TimeSlotWhereUniqueInput, { nullable: false })
  where!: TimeSlotWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TimeSlotUpdateInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotUpdateInput)
  @Field(() => TimeSlotUpdateInput, { nullable: false })
  data!: TimeSlotUpdateInput;
}

export { UpdateTimeSlotArgs as UpdateTimeSlotArgs };