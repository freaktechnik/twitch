/* eslint-disable filenames/match-exported */

import { deprecateClass } from '@d-fischer/shared-utils';

import { Bot } from './Bot';
/** @deprecated Please use the named export `Bot` instead */
const DeprecatedBot = deprecateClass(Bot, 'Please use the named export `Bot` instead');
/** @deprecated Please use the named export `Bot` instead */
type DeprecatedBot = Bot;
/** @deprecated Please use the named export `Bot` instead */
export default DeprecatedBot;
export { Bot };

export { BotConfig } from './Bot';
export { BotCommand, BotCommandMatch } from './BotCommand';
export { BotCommandContext } from './BotCommandContext';
export { createBotCommand } from './helper';
