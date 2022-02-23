/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/no-extraneous-dependencies
import openvpnmanager from 'node-openvpn';
import IVPNProvider, { IAuth, IOptions } from '../VPNProvider';

export default class NodeOpenVpnProvider implements IVPNProvider {
  // eslint-disable-next-line no-unused-vars
  connect(options: IOptions, auth: IAuth): boolean {
    openvpnmanager.connect(options);
    openvpnmanager.on('connected', () => {
      openvpnmanager.authorize(auth);
      return true;
    });
    return false;
  }

  disconnect(): boolean {
    openvpnmanager.disconnect();
    openvpnmanager.on('disconnected', () => {
      openvpnmanager.destroy();
      return true;
    });
    return false;
  }
}
