/* eslint-disable no-underscore-dangle */
import { EventEmitter } from 'events';

global.__MONGO_URI__ = new EventEmitter();
