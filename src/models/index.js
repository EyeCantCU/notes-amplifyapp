// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Note } = initSchema(schema);

export {
  Todo,
  Note
};