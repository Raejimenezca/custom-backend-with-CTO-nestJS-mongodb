import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from 'src/schemes/items.schema';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    return new this.itemModel(createItemDto).save();
  }

  findAll() {
    return this.itemModel.find();
  }

  findOne(id: number) {
    return this.itemModel.findOne({ id });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.itemModel.updateOne({ id }, { $set: { ...updateItemDto } });
  }

  remove(id: number) {
    return this.itemModel.deleteOne({ id });
  }
}
