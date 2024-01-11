
const datafeats = require('./utils/basefeats.json')

function FormatCopositionFeatures(lat:number,long:number,datasolar:any){

    const dayofyear_m = Object.values(datafeats).map((datafeats:any) => datafeats.dayofyear)
    const nvals = dayofyear_m.length

    const week_m = Object.values(datafeats).map((datafeats:any) => datafeats.week)
    const month_m = Object.values(datafeats).map((datafeats:any) => datafeats.month)
    const lat_m = new Array(nvals).fill(lat)
    const long_m = new Array(nvals).fill(long)
    const spots_m = Object.values(datasolar).map((datasolar:any) => datasolar.sunspots)

    return [dayofyear_m,week_m,month_m,lat_m,long_m,spots_m]
}

export { FormatCopositionFeatures}