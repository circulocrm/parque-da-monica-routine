import mongoose from 'mongoose';
import app from './app';
import transferDataUseCase from './UseCases/TransferUseCase';
// import Write from './csvWritter';

require('dotenv').config();

declare const process: {
  env: {
    CONNECTIONSTRING: string
    PORT: number
  }
};

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('Conectado');
  })
  .catch((e) => console.log(e));

// const getData = async () => {
//   try {
//     const SFMCInstance = axios.create({
//       baseURL: 'https://mcv3m3hyqxgpzlvzfp755cxp1250.rest.marketingcloudapis.com',
//     });

//     const { data } = await axios.post('https://mcv3m3hyqxgpzlvzfp755cxp1250.auth.marketingcloudapis.com/v2/token', {
//       grant_type: 'client_credentials',
//       client_id: '1xscr6ywz41wqdrr6yq2oyzg',
//       client_secret: '1CLWxn0V4FrS4M0X0OIQvJZz',
//     });

//     SFMCInstance.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
//     SFMCInstance.defaults.maxBodyLength = Infinity;

//     const PMinstance = axios.create({
//       baseURL: 'http://192.168.160.12:3050/api/v1/',
//     });

//     PMinstance.defaults.headers.common['x-access-token'] =
// eslint-disable-next-line max-len
//    'cf027cd69276caa3a4482459bfa1bed3c548de98ef20f2b0ba84b53b01ad88edaaab1a1be784c602969815e59654c084a0187e4aec52bfec86649cee7ff15f6183e4a0.1841e5f66c223b19ae8110849d846102.cf4117c2c3769afee1723206f3cda8b0bf24f6e58131aae0f6cdde2050e980b4ade6';

//     const response = await PMinstance.post('/vendas', {
//       data: '2021-01-22 23:59:59',
//     });

//     arrSlice(response.data, 10).forEach(async (element) => {
//       try {
//         await SFMCInstance.post('/data/v1/async/dataextensions/key:venda/rows', {
//           items: element,
//         });
//         console.log('here');
//       } catch (error) {
//         if (error instanceof Error) console.log(error.message, element);
//       }
//     });
//   } catch (error) {
//     if (error instanceof Error) console.log('SFMC Provider', error.message);
//   }
// }

app.on('Conectado', () => {
  app.listen(process.env.PORT || 3333, async () => {
    console.log('http://localhost:3333')
    await transferDataUseCase.execute();
    // await getData();
  });
});
