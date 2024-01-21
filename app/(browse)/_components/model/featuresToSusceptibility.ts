import * as tf from '@tensorflow/tfjs';

const arrayColumn = (arr:any, n:number) => arr.map((x:any) => x[n]);

//const ModelURL = 'http://localhost:3000/compositionToCases/model.json';
const ModelURL = 'https://tlahui.vercel.app/compositionToCases/model.json';

async function ToSusceptibilityModel(data:any[]): Promise<any[]> {
    const compositionModel = await tf.loadLayersModel(ModelURL);
    const localdata = tf.tensor2d(data).transpose()

    const predictions = (compositionModel.predict(localdata) as tf.Tensor)
    const value = predictions.arraySync()

    const susceptibility = arrayColumn(value,0)

    const maxS = Math.max(...susceptibility)
    const minS = Math.min(...susceptibility)

    const susceptibilitydata:any[] = []

    for (let i=1; i< 360; i++) {
        susceptibilitydata.push({
            'dayofyear': i,
            'susceptibility':(susceptibility[i] - minS)/(maxS - minS),
        })}

    return susceptibilitydata;
}

export { ToSusceptibilityModel }
