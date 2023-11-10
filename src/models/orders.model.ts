// orders-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'orders';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    id: { type: String},
    ram: { type: String},
    rom: { type: String},
    price: { type: String},
    color: { type: String},
    image: { type: String},
    name: { type: String},
    all: { type: String},
    type: { type: String},
    available: { type: String},
    progress:{type:Number},
    
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
