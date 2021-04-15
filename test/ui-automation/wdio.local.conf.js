/*
Copyright SecureKey Technologies Inc. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

'use strict';

const {config} = require('./wdio.shared.conf');

const domain = ".local.trustbloc.dev"

exports.config = {
    ...config,
    "walletName": "wallet" + domain,
    "walletURL": "https://wallet" + domain,
    "issuerURL": "https://issuer" + domain,
    "verifierURL": "https://rp" + domain,
};