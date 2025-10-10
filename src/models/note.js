import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: false,
      trim: true,
      default: '',
    },
    tag: {
      type: String,
      enum: [...TAGS],
      required: false,
      default: 'Todo',
    },
  },
  { timestamps: true, versionKey: false },
);

noteSchema.index(
  { title: 'text', content: 'text' },
  {
    name: 'NoteTextIndex',
    weights: { title: 3, content: 2 },
    default_language: 'english',
  },
);

export const Note = model('Note', noteSchema);
