import _ from 'lodash';
import * as path from 'path';
import * as fs from 'fs';
import { cwd } from 'process';

console.log(`${cwd()}`);

const compare = (obj1, obj2) => {
  const result = [];
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const allKeys = keys1.concat(keys2);
  const sortKey = _.sortBy(allKeys);
  const uniqKeys = sortKey.filter((key, id) => sortKey.indexOf(key) === id);
  function getLine(uniqKey) {
    if (obj1[uniqKey] === obj2[uniqKey]) {
      result.push(`  ${uniqKey}: ${obj1[uniqKey]} \n`);
    } else if (!keys2.includes(uniqKey)) {
      result.push(`- ${uniqKey}: ${obj1[uniqKey]} \n`);
    } else if (!keys1.includes(uniqKey)) {
      result.push(`+ ${uniqKey}: ${obj2[uniqKey]} \n`);
    } else {
      result.push(`- ${uniqKey}: ${obj1[uniqKey]} \n`);
      result.push(`+ ${uniqKey}: ${obj2[uniqKey]} \n`);
    }
  }
  uniqKeys.map(getLine);
  result.unshift('{ \n');
  result.push('}');
  return result.join('');
};

const getDiff = (filepath1, filepath2) => {
  const obj1 = JSON.parse(fs.readFileSync(path.resolve(filepath1)));
  const obj2 = JSON.parse(fs.readFileSync(path.resolve(filepath2)));
  const obj3 = compare(obj1, obj2);
  return obj3;
};

export default getDiff;
