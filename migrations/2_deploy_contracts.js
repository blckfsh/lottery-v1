const Token = artifacts.require("Token");
const Lottery = artifacts.require("Lottery");

module.exports = async function(deployer) {

  await deployer.deploy(Token, "100");
  await deployer.deploy(Lottery, Token.address);

  // Deploy SLP2
  // const slp2 = await SLP2.deployed();
  // await deployer.deploy(slp2.address);
  //
  // const player_1 = '0x3eA4e3EBB9A7ffDB87C2D22F67d06c7E02d635FD';
  // const player_2 = '0x14d822cA5DbD2A7a1224E6bd0277B636ed54483c';
  // const player_3 = '0x1b77F456720DfDAcddF27D9f809c077B58BaDaDc';
  // const player_4 = '0x2B52bf091465871E76F37Da60D2A53bE0c062e7B';
  // const player_5 = '0x21f917f0Ae0963098574641bb05676b330D2Ee19';
  //
  // // Transfer tokens from SLP2 Smart Contract to Player Addresses
  // await slp2.transfer(player_1, '20000000000000000000');
  // await slp2.transfer(player_2, '20000000000000000000');
  // await slp2.transfer(player_3, '20000000000000000000');
  // await slp2.transfer(player_4, '20000000000000000000');
  // await slp2.transfer(player_5, '20000000000000000000');
}
