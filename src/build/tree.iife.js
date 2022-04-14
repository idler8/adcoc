import Parser from '../parsers/tree.js';
import defaultSource from '../source/index.json';
import getBindSingleton from '../utils/getBindSingleton.js';
getBindSingleton(window, 'adcocTree', Parser, defaultSource);