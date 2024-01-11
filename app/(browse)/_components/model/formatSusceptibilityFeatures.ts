
const datafeats = require('./utils/basefeats.json')

function FormatSusceptibilityFeatures(lat:number,long:number,datasolar:any,datacomposition:any){

    const dayofyear_m = Object.values(datafeats).map((datafeats:any) => datafeats.dayofyear)
    const nvals = dayofyear_m.length

    const week_m = Object.values(datafeats).map((datafeats:any) => datafeats.week)
    const month_m = Object.values(datafeats).map((datafeats:any) => datafeats.month)
    const lat_m = new Array(nvals).fill(lat)
    const long_m = new Array(nvals).fill(long)
    const spots_m = Object.values(datasolar).map((datasolar:any) => datasolar.sunspots)

    const A_m = Object.values(datacomposition).map((datacomposition:any) => datacomposition.A)
    const C_m = Object.values(datacomposition).map((datacomposition:any) => datacomposition.C)
    const G_m = Object.values(datacomposition).map((datacomposition:any) => datacomposition.G)
    const T_m = Object.values(datacomposition).map((datacomposition:any) => datacomposition.T)

    return [dayofyear_m,week_m,month_m,lat_m,long_m,spots_m,A_m,C_m,G_m,T_m]
}

export { FormatSusceptibilityFeatures }