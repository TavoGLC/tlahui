import { CCard } from "./cardw";
import { SolarSG } from "./solarsg"
import { SolarPandemics } from "./solarpd";
import { SolarGradient } from "./solargradient";
import { SolarGradientDT } from "./solargradientdeaths";
import { SolarCycle } from "./schwabecycle";
import { SolarYearly } from "./solaryearly";
import { SolarDaily } from "./solardaily";
import { SpotsDeceases } from "./spotsdeceases";
import { DayDurationDeceases } from "./dldeceases";
import { SolarFluxDeceases } from "./sfdeceases";
import { MFDeceases } from "./mfdeceases";
import { PSDeceases } from "./psdeceases";


export const TextComponent = () => {
    return (
        <div className = "flex flex-col space-y-10 p-10">

            <p className = "text-3xl font-bold">
                Why does it happen?
            </p>

            <p className = "text-2xl font-bold">
                Introduction
            </p>

            <p className="text-xl">
                Outbreaks of pathogenic-driven diseases often appear to be random events. A reason behind such perceived randomness is the lack 
                of a factor or a set of conditions that ease the transmission of a disease. Currently, the most widely accepted theory behind the 
                emergence of pandemics or outbreaks is the introduction of a novel pathogen to an immunologically naive population. 
                Such an introduction is also described as a series of unfortunate events. 
            </p>

            <p className="text-xl">
                Another possibility is a worldwide phenomenon that increases our susceptibility to pathogens. Under this scenario, a series of 
                small outbreaks will precede the foothold of a rapidly propagating pathogen. Also outbreaks will follow the same seasonality of 
                the worldwide phenomena. 
            </p>

            <p className = "text-2xl font-bold">
                Solar activity and pandemics
            </p>

            <p className = "text-xl">
                One of the few environmental phenomena that correlates with pandemics and outbreaks is solar activity. Plotting the number of 
                pandemics alongside the number of sunspots, a measurement of solar activity, shows a characteristic pattern. Pandemics cluster 
                themselves at specific conditions of solar activity, either, maxima or minima.
            </p>

            <SolarPandemics>
            
            </SolarPandemics>

            <p className = "text-xl">
                Those points are also known as stationary points and can be found by calculating the gradient or first derivative, as its value is equal to zero. 
                Plotting the number of pandemics vs the solar activity gradient shows that most pandemics are located at near-zero gradient conditions.
            </p>

            <SolarGradient>
            
            </SolarGradient>

            <p className = "text-xl">
                Likewise, the death toll is also centered at near-zero gradient conditions. 
            </p>

            <SolarGradientDT>
            
            </SolarGradientDT>

            <p className = "text-2xl font-bold">
                The vanishing gradient and mortality 
            </p>

            <p className="text-xl">
                If the susceptibility to pathogenic diseases increases at near-zero gradient conditions causing an increase in mortality, then such an 
                effect must be replicated at different scales of solar activity. Solar activity measured as the number of sunspots shows a repeated pattern 
                with a duration of around 12 years. That pattern is also known as the Schwabe or solar cycle. 
            </p> 

            <SolarCycle>
            </SolarCycle>

            
            <p className="text-xl">
                Although there are other patterns with 
                different durations derived from solar activity, there are two that we experience daily and are derived from the earth's planetary movement. 
                The first one is the result of the revolution movement and changes day duration (yearly pattern). 
            </p>

            <SolarYearly>
            </SolarYearly>

            <p className="tedt-xl">
                The second one results from the rotation movement and creates the day and night cycle often referred to as the circadian cycle (daily pattern). 
            </p>

            <SolarDaily>
            </SolarDaily>

            <p className="text-xl">
                To address the overall death toll and its correlation to the different solar scales the open mortality database from INEGI was analyzed. 
                Solar activity was approximated either by sunspot measurements.
            </p>

            <SpotsDeceases>
            </SpotsDeceases>

            <p className="text-xl">
                Day duration (yearly pattern) approximation
            </p>

            <DayDurationDeceases>
            </DayDurationDeceases>

            <p className="text-xl">
                Or solar flux or intensity (daily pattern) approximation. 
            </p>

            <SolarFluxDeceases>
            </SolarFluxDeceases>

            <p className="text-xl">
                Plotting overall death vs solar activity gradient at the different scales shows an increase in the number of deaths at near-zero gradient 
                conditions. A pattern repeated at every scale tested. 
            </p>

            <MFDeceases>
            </MFDeceases>
            
            <p className="text-xl">
                Yet two patterns of solar activity were approximated making it likely that the behavior found was the result of some bias in the equations. 
                To address that concern, solar wind data is used as a measure of solar activity, particularly for the daily pattern. This new analysis also 
                showed the same increase in the number of deaths at near-zero gradient conditions. 
            </p>

            <PSDeceases>
            </PSDeceases>

            <p className = "text-2xl font-bold">
                Is everything synchronized?
            </p>

            <p className="text-xl">
                Even when it seems that everyone passes away at the same time, the reality is that near-zero gradient conditions are somewhat variable. 
                For example, across a single day, there are three periods at which a near-zero gradient event can happen: dusk, dawn, and noon. Specific times 
                at which those three periods take place change both location-wise and time-wise (day of the year). Under a solar scale, those three periods are 
                similar, but under a standard calendar or clock are far away. 
            </p>
            <p className="text-xl">
                Also, periods of time at which near-zero gradient conditions converge are not that common. However, pandemics that took place under a Gleissberg 
                (a cycle of solar activity with a duration of around 100 years) and Schwabe near-zero gradient had a particularly high death toll (Spanish flu).  
                Also as we are under a Gleissberg-Schwabe near zero gradient it's likely that the emergence of COVID-19 as well as the widespread excess mortality 
                is either a consequence or fuled by the current environment. 
            </p>

            <SolarSG>
            </SolarSG>

            <p className = "text-2xl font-bold">
                Why the name? 
            </p>

            <p className="text-xl">
                If outbreaks, pandemics, and overall mortality are tightly correlated to near-zero gradient conditions such observation had likely been presented 
                before. In the Mexica religion, the different gods were just representations of natural phenomena. Particularly, Tlahuizcalpantecuhtli, or the 
                "early morning star" or the "lord of the dawn", represented Venus and its menacing aspects. It was believed that its rays could damage people, crops, 
                and water sources. Early morning or dawn is also another of the many periods at which a zero gradient event takes place. 
            </p>
            <p className="text-xl">
                Walpurigs night and Halloween are another two festivities that were associated with the presence of supernatural entites that increased mortality. 
                Both festivities take place before zero gradient conditions at the yearly scale. 
            </p>
            <p className="text-xl">
                Another example could be the poem of Erra, written between 800-600 bce, in a period in which synchronization between the Gleissber and Schwabe cycle might 
                have happened. Erra was the god of pestilence and responsible for political unrest and is associated with another solar deity known as Nergal, particularly 
                the sun at noon and summer solstice. 
            </p>

            <p className = "text-2xl font-bold">
                Summing up 
            </p>

            <p className="text-xl">
                Specific conditions of solar activity increase our susceptibility to pathogens. A subset will transmit rapidly through the population creating outbreaks 
                and pandemics. The large number of infections of a fast spreading pathogen as well as the increased susceptibility due to solar activity patterns will 
                increase the mortality of other non pathogenic diseases generating an overall increase in mortality. 
            </p>
            <p className="text-xl">
                Even when the exact mechanism behind the increased susceptibility is not presented it is likely due to some sort of disruption of the circadian rhythm. 
                As the patterns of solar activity align at different scales the synchronization between the different signals and the inner clock is likely lost due to 
                the inability to recognize each pattern effectively as they all look the same.
            </p>
            <p className="text-xl">
                The inability to accurately synchronize the circadian rhythm to the natural zeitgeber will most likely disrupt in different ways physiological function. 
                One of the many systems that rely on circadian rhythmicity is the immune system, if its functions become compromised it will create a mild immunodeficiency. 
                Disruption of the circadian rhythm will ease the transmission of pathogens, while pathogens with circadian seasonality will thrive under near-zero gradient 
                conditions.  Constant infection and immune system disruption will create a self-feeding loop that will further increase the susceptibility to other diseases 
                as well as overall mortality. 
            </p>

            <p>
                Note. 
                Specifics behind data analysis as well as other resources can be found on the next page. 
            </p>

        </div>
    );
};