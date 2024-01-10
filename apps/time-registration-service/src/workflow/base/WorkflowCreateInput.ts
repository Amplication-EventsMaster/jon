/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput } from "./WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsInt,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { WorkflowStepCreateNestedManyWithoutWorkflowsInput } from "./WorkflowStepCreateNestedManyWithoutWorkflowsInput";
import { EnumWorkflowTimeUnit } from "./EnumWorkflowTimeUnit";
import { EnumWorkflowTrigger } from "./EnumWorkflowTrigger";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class WorkflowCreateInput {
  @ApiProperty({
    required: false,
    type: () => WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput,
  })
  @ValidateNested()
  @Type(() => WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput)
  @IsOptional()
  @Field(() => WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput, {
    nullable: true,
  })
  activeOn?: WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => WorkflowStepCreateNestedManyWithoutWorkflowsInput,
  })
  @ValidateNested()
  @Type(() => WorkflowStepCreateNestedManyWithoutWorkflowsInput)
  @IsOptional()
  @Field(() => WorkflowStepCreateNestedManyWithoutWorkflowsInput, {
    nullable: true,
  })
  steps?: WorkflowStepCreateNestedManyWithoutWorkflowsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  time?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumWorkflowTimeUnit,
  })
  @IsEnum(EnumWorkflowTimeUnit)
  @IsOptional()
  @Field(() => EnumWorkflowTimeUnit, {
    nullable: true,
  })
  timeUnit?: "DAY" | "HOUR" | "MINUTE" | null;

  @ApiProperty({
    required: true,
    enum: EnumWorkflowTrigger,
  })
  @IsEnum(EnumWorkflowTrigger)
  @Field(() => EnumWorkflowTrigger)
  trigger!: "BEFORE_EVENT" | "EVENT_CANCELLED" | "NEW_EVENT";

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;
}

export { WorkflowCreateInput as WorkflowCreateInput };
