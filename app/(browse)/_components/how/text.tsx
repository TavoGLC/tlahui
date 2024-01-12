import Link from "next/link";
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react";

export const TextComponent = () => {
    return (
        <div className = "flex flex-col space-y-10 p-10">

            <p className = "text-3xl font-bold">
                How does it work?
            </p>

            <p className = "text-2xl font-bold">
                Forecast - Known Issues.
            </p>

            <p className="text-xl">
                Susceptibility forecasting is obtained by the combination of two machine learning models. The first one forecasts viral composition from 
                time and solar features. The second model forecasts viral susceptibility by using a combination of time and solar features as well as viral 
                composition.
            </p>

            <p className="text-xl">    
                Susceptibility is approximated as the relative number of cases per wave and location. Changes in testing frequency as well as other non-pharmacological
                interventions through the PHEIC phase will most likely add a moving confounding variable almost impossible to measure. Thus the overall profile of the 
                susceptibility forecast should be treated as a relative measure of high and low rather than a quantitative measure of the susceptibility to SARS-Cov2. 
                Maximum values either global or local should be treated as high, and the same logic applies to minima. 
            </p>
            
            <p className="text-xl">
                Case data is spread through several continents, however, genomic sampling is mostly confined to the US as the genomes used to train the model were 
                downloaded from the NCBI database as it was the only one that I have access to. 
            </p>

            <p className="text-xl">
                If you have access to other local sources of data you could either re-train the model from scratch or fine-tune it with the new data. Specifics of 
                how the model was declared and trained can be found here. 
            </p>

            <Link href="https://github.com/TavoGLC/datasets/blob/d8ba7562eb02ad65cd789d68378bf5538fa93e67/deceasesmx.py"  target="_blank" rel="noopener noreferrer">
                    <Button >
                        < ExternalLink />
                    </Button>
            </Link>

            <p className = "text-2xl font-bold">
                Mortality Data
            </p>

            <p className="text-xl">
                Data was downloaded from the INEGI open database. Specifics about how the data preprocessing is done can be found here. 
            </p>

            <Link href="https://github.com/TavoGLC/datasets/blob/d8ba7562eb02ad65cd789d68378bf5538fa93e67/deceasesmx.py"  target="_blank" rel="noopener noreferrer">
                    <Button >
                        < ExternalLink />
                    </Button>
            </Link>

            <p className="text-xl">
                Also, data was subsampled to allow for a small representation as well as to reduce the overall size of the web app. A complete analysis of 
                the data can be found here. 
            </p>

            <Link href="https://www.kaggle.com/code/tavoglc/mortality-under-different-zeitgeber-scales/notebook"  target="_blank" rel="noopener noreferrer">
                    <Button >
                        < ExternalLink />
                    </Button>
            </Link>

            <p className = "text-2xl font-bold">
                Solar Data
            </p>

            <p className="text-xl">
                Solar activity data was obtained through multiple sources, sunspots data was obtained from the Sunspot Index and Long-term Solar Observations, 
                while solar wind data was obtained from the Deep Space Climate Observatory (DSCOVR) repository. Specifics regarding solar wind data formatting 
                can be found here. 

            </p>

            <Link href="https://github.com/TavoGLC/datasets/blob/d8ba7562eb02ad65cd789d68378bf5538fa93e67/solarwind.py"  target="_blank" rel="noopener noreferrer">
                    <Button >
                        < ExternalLink />
                    </Button>
            </Link>

            <p className="text-xl">
                Solar patterns that resulted from the earth&apos;s planetary movement were obtained from the following sources. 
            </p>

            <p className="text-xl font-bold">
                Yearly Pattern
            </p>

            <p>
                Forsythe, William & Rykiel, Edward & Stahl, Randal & Wu, Hsin-i & Schoolfield, Robert. (1995). A Model Comparison for Daylength as a Function 
                of Latitude and Day of Year. Ecological Modelling. 80. 87-95. 10.1016/0304-3800(94)00034-F. 
            </p>
            
            <p className="text-xl font-bold">
                Daily Pattern
            </p>

            <p>
                Y. El Mghouchi, A. El Bouardi, Z. Choulli, T. Ajzoul, New model to estimate and evaluate the solar radiation,International Journal of Sustainable 
                Built Environment, Volume 3, 2,2014, 225-234
            </p>
            
            <p className="text-xl">
                The conclusions listed before do not represent the views of any of the different authors or institutions mentioned before. 
            </p>

            <p className="text-2xl font-bold">
                Want to know more?
            </p>

            <p className="text-xl">
                A comprehensive list of different resources can be found here.
            </p>

            <Link href="https://github.com/TavoGLC/SARSCov2Solar"  target="_blank" rel="noopener noreferrer">
                    <Button >
                        < ExternalLink />
                    </Button>
            </Link>

            <p className="text-xl">
                It contains several data sources, code, live examples, a preprint, and a series of blog posts discussing the results and the techniques proposed 
                within them. The main objective of the project is to combine environmental, genomic, epidemiological, and other data sources for the fast 
                characterization of emerging pathogens. 
            </p>

            <p className = "text-2xl font-bold">
                What&apos;s next?
            </p>

            <p className="text-xl">
                SARS-Cov2 changes composition through time, and those changes are often referred to as mutations, although some of them might be random the 
                majority are just the result of an adaptation process that allows the virus to propagate as well as to adapt to the environment. Those seasonal 
                changes behave as an internal clock, thus forecasting changes in composition allows forecasting prevalence or susceptibility (using the local 
                definition of it). Such molecular clock might be a shared feature among all viruses or at least RNA viruses, however time scale as well as the 
                environmental variable used to measure time might change. 
            </p>

            <p className="text-xl">
                Currently, the main objective is to fine-tune the web app, deploy it as a mobile app, and add other sources of information. The long term will 
                be to adapt it to other kinds of viruses.  
            </p>

            <p className="text-xl">
                If you find valuable the information and models provided in the previous pages please consider supporting the project through the different 
                platforms listed below, or by a one-time donation through the donate button. 
            </p>

            <Link href="https://t.co/KTYHarD5Ag"  target="_blank" rel="noopener noreferrer">
                    <Button >
                        < ExternalLink />
                    </Button>
            </Link>

        </div>
    );
};