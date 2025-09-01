const { spawn } = require('child_process');
const path = require('path');

console.log('Starting combined backend and frontend server...');

// Start backend on port 3001
const backendProcess = spawn('npm', ['start'], {
    cwd: path.join(__dirname, 'backend'),
    env: { ...process.env, PORT: '3001' },
    stdio: 'inherit'
});

// Start frontend on main PORT
const frontendProcess = spawn('npm', ['start'], {
    cwd: path.join(__dirname, 'frontend'),
    env: { ...process.env, NEXT_PUBLIC_API_URL: 'http://localhost:3001' },
    stdio: 'inherit'
});

// Handle process termination
process.on('SIGTERM', () => {
    backendProcess.kill('SIGTERM');
    frontendProcess.kill('SIGTERM');
    process.exit(0);
});

process.on('SIGINT', () => {
    backendProcess.kill('SIGINT');
    frontendProcess.kill('SIGINT');
    process.exit(0);
});