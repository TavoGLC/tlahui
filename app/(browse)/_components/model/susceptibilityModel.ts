import * as tf from '@tensorflow/tfjs';
import { MovingAverage } from './movingaverage';

const arrayColumn = (arr:any, n:number) => arr.map((x:any) => x[n]);

const ModelURL = 'http://localhost:3000/cases/model.json';
//const ModelURL = 'https://tlahui.vercel.app/cases/model.json';

async function SusceptibilityModel(data:any[]): Promise<any[]> {
    const compositionModel = await tf.loadLayersModel(ModelURL);
    const localdata = tf.tensor2d(data).transpose()
    //const localdata = tf.randomUniform([365, 10])

    const predictions = (compositionModel.predict(localdata) as tf.Tensor)
    const value = predictions.arraySync()

    const value0 = arrayColumn(value,0)
    const window = 14

    const susceptibility =  MovingAverage(value0,window)

    const maxS = Math.max(...susceptibility)
    const minS = Math.min(...susceptibility)

    const susceptibilitydata:any[] = []

    for (let i=1; i< 360; i++) {
        susceptibilitydata.push({
            'dayofyear': i,
            'susceptibility':(susceptibility[i] - minS)/(maxS - minS),
        })}

    //console.log(susceptibilitydata)

    return susceptibilitydata;
}

export { SusceptibilityModel }
