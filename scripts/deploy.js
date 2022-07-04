const hre = require("hardhat");
const fs = require('fs')

const main = async () => { 
 
  const Attendance = await hre.ethers.getContractFactory("Attendance");
  const attendance = await Attendance.deploy();

  await attendance.deployed();
  console.log("Attendance deployed to:", attendance.address);

  fs.writeFileSync('./config.js', `export const contractAddress = "${attendance.address}"
  export const ownerAddress = "${attendance.signer.address}"`)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error);
    process.exit(1)
  }
} 

runMain()