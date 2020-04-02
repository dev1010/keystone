import {
  Float,
  MongoFloatInterface,
  KnexFloatInterface,
  JSONFloatInterface,
  MemoryFloatInterface,
} from './Implementation';
import { importView } from '@keystonejs/build-field-types';

export default {
  type: 'Float',
  implementation: Float,
  views: {
    Controller: importView('./views/Controller'),
    Field: importView('./views/Field'),
    Filter: importView('./views/Filter'),
  },
  adapters: {
    mongoose: MongoFloatInterface,
    knex: KnexFloatInterface,
    memory: MemoryFloatInterface,
    json: JSONFloatInterface,
  },
};
