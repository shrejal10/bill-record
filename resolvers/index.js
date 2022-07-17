const recordResolvers = require("./record");
const _ = require("lodash");

const resolvers = _.merge({}, recordResolvers);
module.exports = resolvers;