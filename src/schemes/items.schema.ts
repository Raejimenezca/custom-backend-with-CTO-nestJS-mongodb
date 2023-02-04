import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  createdAt?: Date;

  @Prop()
  units?: number;

  @Prop()
  available?: boolean;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
