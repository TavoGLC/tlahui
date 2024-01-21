
const datafeats = require('./utils/basefeats.json')

function FormatFeatures(lat:number,long:number,cloud:number,ozone:number,datasolar:any){

    function daylength(J:number){

        //CERES model  Ecological Modelling 80 (1995) 87-95
        const phi = 0.4093*Math.sin(0.0172*(J-82.2))
        const coef = (-Math.sin(Math.PI*lat/180)*Math.sin(phi)-0.1047)/(Math.cos(Math.PI*lat/180)*Math.cos(phi))
        const arg0 = Math.max(-0.87,coef)
        const ha =7.639*Math.acos(arg0)
        return ha

    }

    const dayofyear_m = Object.values(datafeats).map((datafeats:any) => datafeats.dayofyear)
    const nvals = dayofyear_m.length

    const week_m = Object.values(datafeats).map((datafeats:any) => datafeats.week)
    const month_m = Object.values(datafeats).map((datafeats:any) => datafeats.month)
    const lat_m = new Array(nvals).fill(Number(lat))
    const long_m = new Array(nvals).fill(Number(long))
    const spots_m = Object.values(datasolar).map((datasolar:any) => datasolar.sunspots)
    const dl_m = Object.values(datafeats).map((datasolar:any) => daylength(datasolar.dayofyear))

    const cloud_m = new Array(nvals).fill(Number(cloud))
    const ozone_m = new Array(nvals).fill(Number(ozone))

    return [dayofyear_m,week_m,month_m,lat_m,long_m,spots_m,dl_m,cloud_m,ozone_m]
}

export { FormatFeatures }