//Requirements before using SDK calls, derive the signer

// const ethers = require('ethers');
import ethers from 'ethers';
const PK = 'd94aa962db3981616aad0f993f912f58513dc909f77fa43306e9c1ad8ebfaec8'; // clé de greg d94aa962db3981616aad0f993f912f58513dc909f77fa43306e9c1ad8ebfaec8
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);
const channelAddress = '0xc2e7d019e3578884add94a377eeff3a5a1e7979b';
const env = 'staging';

// module.exports = {
//   signer: signer,
//   channelAddress: '0xc2e7d019e3578884add94a377eeff3a5a1e7979b', // adresse du channel 
//   env: 'staging'
// };

export {signer, channelAddress, env};