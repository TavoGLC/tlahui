import * as tf from '@tensorflow/tfjs';
import { MovingAverage } from './movingaverage';

const arrayColumn = (arr:any, n:number) => arr.map((x:any) => x[n]);

//const ModelURL = 'http://localhost:3000/decoder/model.json';
const ModelURL = 'https://tlahui.vercel.app/decoder/model.json';

async function LatentToComposition(data:any[]): Promise<any[]> {
    const compositionModel = await tf.loadLayersModel(ModelURL);
    const localdata = tf.tensor2d(data).transpose()

    const predictions = (compositionModel.predict(localdata) as tf.Tensor)
    const value = predictions.arraySync()

    const container = []

    for (let i=0; i< 340; i++) {
        container.push(arrayColumn(value,i))
    }

    const window = 14

    const value0 = arrayColumn(value,0)
    const value1 = arrayColumn(value,1)
    const value2 = arrayColumn(value,2)
    const value3 = arrayColumn(value,3)

    const A_m = MovingAverage(value0,window)
    const C_m = MovingAverage(value1,window)
    const G_m = MovingAverage(value2,window)
    const T_m = MovingAverage(value3,window)

    const maxA = Math.max(...A_m)
    const minA = Math.min(...A_m)

    const maxC = Math.max(...C_m)
    const minC = Math.min(...C_m)

    const maxG = Math.max(...G_m)
    const minG = Math.min(...G_m)

    const maxT = Math.max(...T_m)
    const minT = Math.min(...T_m)

    const compositiondata:any = []

    for (let i=1; i< 360; i++) {
        const a = (A_m[i] - minA)/(maxA - minA)
        const c = (C_m[i] - minC)/(maxC - minC)
        const g = (G_m[i] - minG)/(maxG - minG)
        const t = (T_m[i] - minT)/(maxT - minT)

        const aval = Number.isNaN(a)? 0: a
        const cval = Number.isNaN(c)? 0: c
        const gval = Number.isNaN(g)? 0: g
        const tval = Number.isNaN(t)? 0: t

        compositiondata.push({
            'dayofyear': i,
            'A': aval,
            'C': cval,
            'G': gval,
            'T': tval,
        })}


    return [container,compositiondata];
}

export { LatentToComposition }