// Maybe when importing from web
//import Slider from '../../src/components/Slider'
import Slider from '../components/slider'
import {get} from 'lodash'

export default function resolveInput(type) {
//  if (type.name === 'number' && get(type, 'options.range')) {
//    return Slider
//  }
//  return false
  if (type.name === 'number' && type.options && type.options.range) {
    return Slider
  }
}