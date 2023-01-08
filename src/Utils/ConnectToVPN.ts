import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function checkVPNConnection(): Promise<void> {
  const { stdout } = await execPromise('ipconfig');
  if (stdout.includes('parque monica')) return;
  await execPromise('rasdial PM parque\\acesso Parque@321');
}
