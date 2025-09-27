console.log('prepare to clear');

const os = require('os');
const { execSync } = require('child_process');

try {
  const platform = os.platform();
  let command;

  if (platform === 'win32') {
    command = 'taskkill /f /im node.exe';
  } else if (platform === 'darwin') {
    // macOS
    command = 'killall node';
  } else if (platform === 'linux') {
    command = 'killall node';
  } else {
    console.warn('Unsupported platform.  Cannot kill Node.js processes.');
    return;
  }

  execSync(command, { stdio: 'ignore' });
  console.log('Killed all Node.js processes.');
} catch (error) {
  console.error('Error killing Node.js processes:', error);
}