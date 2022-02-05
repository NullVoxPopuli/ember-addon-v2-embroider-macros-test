
import {macroCondition, dependencySatisfies, importSync} from '@embroider/macros';



if (macroCondition(dependencySatisfies('ember-concurrency', '^1.0.0'))) {
  let {get} = importSync('@ember/object');

  console.log(get);
}

export const two = 2;
