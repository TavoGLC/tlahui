import * as tf from '@tensorflow/tfjs';

const arrayColumn = (arr:any, n:number) => arr.map((x:any) => x[n]);

//const ModelURL = 'http://localhost:3000/featsToLatent/model.json';
const ModelURL = 'https://tlahui.vercel.app/featsToLatent/model.json';

async function ToLatentModel(data:any[]): Promise<any[]> {
    const compositionModel = await tf.loadLayersModel(ModelURL);
    const localdata = tf.tensor2d(data).transpose()

    const predictions = (compositionModel.predict(localdata) as tf.Tensor)
    const value = predictions.arraySync()

    const latent0_m = arrayColumn(value,0)
    const latent1_m = arrayColumn(value,1)

    return [latent0_m,latent1_m];
}

export { ToLatentModel }
