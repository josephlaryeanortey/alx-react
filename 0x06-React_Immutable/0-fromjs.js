import { fromJS } from 'immutable';

/**
 * Converts a plain JavaScript object into an Immutable Map using fromJS.
 * @param {Object} object - The plain JavaScript object to convert.
 * @returns {Immutable.Map} - The resulting Immutable Map.
 */
export default function getImmutableObject(object) {
  return fromJS(object);
}
