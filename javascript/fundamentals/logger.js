import { TYPE_INFO } from './constants.js';

export default function logger(message, type = TYPE_INFO) {
	console.log(`${message} and type is ${type}`);
}