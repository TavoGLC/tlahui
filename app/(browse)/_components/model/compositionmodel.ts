import * as tf from '@tensorflow/tfjs';

const arrayColumn = (arr:any, n:number) => arr.map((x:any) => x[n]);

const compositionModelURL = 'http://localhost:3000/composition/model.json';

async function CompositionModel(data:any[]): Promise<any[]> {
    const compositionModel = await tf.loadLayersModel(compositionModelURL);
    const localdata = tf.tensor2d(data).transpose()

    const predictions = compositionModel.predict(localdata)
    const value = predictions.arraySync()
    const A_m = arrayColumn(value,0)
    const C_m = arrayColumn(value,1)
    const G_m = arrayColumn(value,2)
    const T_m = arrayColumn(value,3)

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
        compositiondata.push({
            'dayofyear': i,
            'A': (A_m[i] - minA)/(maxA - minA),
            'C': (C_m[i] - minC)/(maxC - minC),
            'G': (G_m[i] - minG)/(maxG - minG),
            'T': (T_m[i] - minT)/(maxT - minT),
        })}

    console.log(compositiondata)

    return compositiondata;
}

export { CompositionModel }
