import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreedsModule } from './controllers/breeds/breeds.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './controllers/items/items.module';

@Module({
  imports: [
    BreedsModule,
    ItemsModule,
    MongooseModule.forRoot(String('mongodb://localhost/nest')),
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
