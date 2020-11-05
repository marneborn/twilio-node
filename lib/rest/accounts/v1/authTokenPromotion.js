'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var AuthTokenPromotionList;
var AuthTokenPromotionPage;
var AuthTokenPromotionInstance;
var AuthTokenPromotionContext;

/* jshint ignore:start */
/**
 * Initialize the AuthTokenPromotionList
 *
 * @constructor Twilio.Accounts.V1.AuthTokenPromotionList
 *
 * @param {Twilio.Accounts.V1} version - Version of the resource
 */
/* jshint ignore:end */
AuthTokenPromotionList = function AuthTokenPromotionList(version) {
  /* jshint ignore:start */
  /**
   * @function authTokenPromotion
   * @memberof Twilio.Accounts.V1#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Accounts.V1.AuthTokenPromotionContext}
   */
  /* jshint ignore:end */
  function AuthTokenPromotionListInstance(sid) {
    return AuthTokenPromotionListInstance.get(sid);
  }

  AuthTokenPromotionListInstance._version = version;
  // Path Solution
  AuthTokenPromotionListInstance._solution = {};
  /* jshint ignore:start */
  /**
   * Constructs a auth_token_promotion
   *
   * @function get
   * @memberof Twilio.Accounts.V1.AuthTokenPromotionList#
   *
   * @returns {Twilio.Accounts.V1.AuthTokenPromotionContext}
   */
  /* jshint ignore:end */
  AuthTokenPromotionListInstance.get = function get() {
    return new AuthTokenPromotionContext(this._version);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Accounts.V1.AuthTokenPromotionList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  AuthTokenPromotionListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  AuthTokenPromotionListInstance[util.inspect.custom] = function inspect(depth,
      options) {
    return util.inspect(this.toJSON(), options);
  };

  return AuthTokenPromotionListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the AuthTokenPromotionPage
 *
 * @constructor Twilio.Accounts.V1.AuthTokenPromotionPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {AuthTokenPromotionSolution} solution - Path solution
 *
 * @returns AuthTokenPromotionPage
 */
/* jshint ignore:end */
AuthTokenPromotionPage = function AuthTokenPromotionPage(version, response,
                                                          solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(AuthTokenPromotionPage.prototype, Page.prototype);
AuthTokenPromotionPage.prototype.constructor = AuthTokenPromotionPage;

/* jshint ignore:start */
/**
 * Build an instance of AuthTokenPromotionInstance
 *
 * @function getInstance
 * @memberof Twilio.Accounts.V1.AuthTokenPromotionPage#
 *
 * @param {AuthTokenPromotionPayload} payload - Payload response from the API
 *
 * @returns AuthTokenPromotionInstance
 */
/* jshint ignore:end */
AuthTokenPromotionPage.prototype.getInstance = function getInstance(payload) {
  return new AuthTokenPromotionInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Accounts.V1.AuthTokenPromotionPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
AuthTokenPromotionPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

AuthTokenPromotionPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the AuthTokenPromotionContext
 *
 * @constructor Twilio.Accounts.V1.AuthTokenPromotionInstance
 *
 * @property {string} accountSid -
 *          The SID of the Account that the secondary Auth Token was created for
 * @property {string} authToken - The promoted Auth Token
 * @property {Date} dateCreated -
 *          The ISO 8601 formatted date and time in UTC when the resource was created
 * @property {Date} dateUpdated -
 *          The ISO 8601 formatted date and time in UTC when the resource was last updated
 * @property {string} url -
 *          The URI for this resource, relative to `https://accounts.twilio.com`
 *
 * @param {V1} version - Version of the resource
 * @param {AuthTokenPromotionPayload} payload - The instance payload
 */
/* jshint ignore:end */
AuthTokenPromotionInstance = function AuthTokenPromotionInstance(version,
    payload) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.authToken = payload.auth_token; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {};
};

Object.defineProperty(AuthTokenPromotionInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new AuthTokenPromotionContext(this._version);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * update a AuthTokenPromotionInstance
 *
 * @function update
 * @memberof Twilio.Accounts.V1.AuthTokenPromotionInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AuthTokenPromotionInstance
 */
/* jshint ignore:end */
AuthTokenPromotionInstance.prototype.update = function update(callback) {
  return this._proxy.update(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Accounts.V1.AuthTokenPromotionInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
AuthTokenPromotionInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

AuthTokenPromotionInstance.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the AuthTokenPromotionContext
 *
 * @constructor Twilio.Accounts.V1.AuthTokenPromotionContext
 *
 * @param {V1} version - Version of the resource
 */
/* jshint ignore:end */
AuthTokenPromotionContext = function AuthTokenPromotionContext(version) {
  this._version = version;

  // Path Solution
  this._solution = {};
  this._uri = `/AuthTokens/Promote`;
};

/* jshint ignore:start */
/**
 * update a AuthTokenPromotionInstance
 *
 * @function update
 * @memberof Twilio.Accounts.V1.AuthTokenPromotionContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AuthTokenPromotionInstance
 */
/* jshint ignore:end */
AuthTokenPromotionContext.prototype.update = function update(callback) {
  var deferred = Q.defer();
  var promise = this._version.update({uri: this._uri, method: 'POST'});

  promise = promise.then(function(payload) {
    deferred.resolve(new AuthTokenPromotionInstance(this._version, payload));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Accounts.V1.AuthTokenPromotionContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
AuthTokenPromotionContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

AuthTokenPromotionContext.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  AuthTokenPromotionList: AuthTokenPromotionList,
  AuthTokenPromotionPage: AuthTokenPromotionPage,
  AuthTokenPromotionInstance: AuthTokenPromotionInstance,
  AuthTokenPromotionContext: AuthTokenPromotionContext
};