/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { TimeSlot } from "./TimeSlot";
import { TimeSlotCountArgs } from "./TimeSlotCountArgs";
import { TimeSlotFindManyArgs } from "./TimeSlotFindManyArgs";
import { TimeSlotFindUniqueArgs } from "./TimeSlotFindUniqueArgs";
import { CreateTimeSlotArgs } from "./CreateTimeSlotArgs";
import { UpdateTimeSlotArgs } from "./UpdateTimeSlotArgs";
import { DeleteTimeSlotArgs } from "./DeleteTimeSlotArgs";
import { TimeSlotService } from "../timeSlot.service";
@graphql.Resolver(() => TimeSlot)
export class TimeSlotResolverBase {
  constructor(protected readonly service: TimeSlotService) {}

  async _timeSlotsMeta(
    @graphql.Args() args: TimeSlotCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TimeSlot])
  async timeSlots(
    @graphql.Args() args: TimeSlotFindManyArgs
  ): Promise<TimeSlot[]> {
    return this.service.timeSlots(args);
  }

  @graphql.Query(() => TimeSlot, { nullable: true })
  async timeSlot(
    @graphql.Args() args: TimeSlotFindUniqueArgs
  ): Promise<TimeSlot | null> {
    const result = await this.service.timeSlot(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TimeSlot)
  async createTimeSlot(
    @graphql.Args() args: CreateTimeSlotArgs
  ): Promise<TimeSlot> {
    return await this.service.createTimeSlot({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => TimeSlot)
  async updateTimeSlot(
    @graphql.Args() args: UpdateTimeSlotArgs
  ): Promise<TimeSlot | null> {
    try {
      return await this.service.updateTimeSlot({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TimeSlot)
  async deleteTimeSlot(
    @graphql.Args() args: DeleteTimeSlotArgs
  ): Promise<TimeSlot | null> {
    try {
      return await this.service.deleteTimeSlot(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}