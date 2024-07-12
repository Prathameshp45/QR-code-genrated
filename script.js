const qrcode = require('qrcode');

const  inquirer = require('inquirer');



const path = require('path');



//function to prompt user input
async function promptUser() {
  const { data } = await inquirer.prompt([
    {
      type: 'input',
      name: 'data',
      message: 'Enter the data for which you want to generate a QR Code:',
      validate: input => input ? true : 'Input cannot be empty!'
    }
  ]);
  return data;
}

// function to generate QR code

async function generateQRCode(data) {
  try {
    const outputPath = path.join(__dirname, `${data}.png`);
    await qrcode.toFile(outputPath, data);
  } catch (error) {
    throw new Error('Failed to generate QR Code');
  }
}


//main fuction 

const main = async ()=>{
    const data = await promptUser();
    await generateQRCode(data);
};

//main
main();

