const Token = artifacts.require("Token");
const Lottery = artifacts.require("Lottery");

module.exports = async function(deployer) {

  // Deploy Token
  await deployer.deploy(Token, "100");
  const token = await Token.deployed('100');

  // Deploy Lottery
  // await deployer.deploy(Lottery, Token.address);
  // const lottery = await Lottery.deployed(token.address);
