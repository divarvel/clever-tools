'use strict';

const Logger = require('../logger.js');
const SendToApi = require('../models/send-to-api.js');
const { addOauthHeader } = require('@clevercloud/client/cjs/oauth.node.js');

async function sign (params) {
  const [method, url] = params.args;

  const requestParams = {
    method, url,
  };

  const { tokens } = await SendToApi.getHostAndTokens();
  const result = await addOauthHeader(tokens)(requestParams);
  Logger.println(result.headers.Authorization);
};

module.exports = { sign };
