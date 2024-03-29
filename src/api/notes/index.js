const NotesHandler = require('./handler');
const routes = require('./routes');

/**
 * Notes Plugin Options
 * @typedef PluginOptions
 * @property {import('../../services/postgres/NotesService')} service
 * @property {import('../../validator/notes')} validator
 */

/**
 * Notes Plugin
 * @type {import('@hapi/hapi').PluginBase<PluginOptions>
 * & (import('@hapi/hapi').PluginNameVersion
 * | import('@hapi/hapi').PluginPackage)}
 */
module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const notesHandler = new NotesHandler(service, validator);
    server.route(routes(notesHandler));
  },
};
