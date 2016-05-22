/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-22
 */
import {genResource, dynamicExport} from 'angular-es-utils';

dynamicExport(exports, 'AppResource', () => genResource('/apps', true));