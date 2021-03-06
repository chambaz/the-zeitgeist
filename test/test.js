const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Zeitgeist', function () {
  let Zeitgeist, zeitgeist, addr1, addr2, addrs

  beforeEach(async function () {
    ;[addr1, addr2, ...addrs] = await ethers.getSigners()
    Zeitgeist = await ethers.getContractFactory('Zeitgeist')
    zeitgeist = await Zeitgeist.deploy()
    zeitgeist.deployed()
  })

  it('Should mint NFTs and return balance of owner', async function () {
    await zeitgeist.mintNFT('ipfs://testipfsurl/1')
    await zeitgeist.mintNFT('ipfs://testipfsurl/2')
    await zeitgeist.mintNFT('ipfs://testipfsurl/3')

    expect(await zeitgeist.balanceOf(addr1.address)).to.equal(3)
  })

  it('Should mint NFT and update the token URI', async function () {
    await zeitgeist.mintNFT('ipfs://testipfsurl/1')
    await zeitgeist.updateNFT(1, 'ipfs://testipfsurl/2')

    expect(await zeitgeist.tokenURI(1)).to.equal('ipfs://testipfsurl/2')
  })
})
