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
import { CasesDL } from "./casescurvedd";
import { CasesDLG } from "./casescurveddg";
import { CasesDLGF } from "./casesswept";


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
                Although there are at least other two patterns of solar activity, we experience them daily and are derived from the 
                earth&apos;s planetary movement. The first one is the result of the revolution movement and changes day duration (yearly pattern).
            </p>

            <SolarYearly>
            </SolarYearly>

            <p className="text-xl">
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
                Also as we are under a Gleissberg-Schwabe near zero gradient it&apos;s likely that the emergence of COVID-19 as well as the widespread excess mortality 
                is either a consequence or fuled by the current environment. 
            </p>

            <SolarSG>
            </SolarSG>

            <p className = "text-2xl font-bold">
                What about COVID-19?
            </p>

            <p className="text-xl">
                The previous shows how overall mortality as well as the emergence of pandemics are tightly associated with specific conditions of solar activity. 
                Thus it is likely that some pathogens follow solar activity, however, due to the changing nature of solar activity such a correlation has not been 
                made. Furthermore, solar activity is the basis of different time measures such as calendars. Also, it has been used to organize different aspects of 
                human activity and society, making it likely to associate the prevalence of pathogens with solar rhythmicity to human activity and behavior. 
                One such disease is COVID-19, a disease caused by SARS-Cov2 infection. Thus to accurately determine the seasonality of COVID-19 two things are 
                needed, a general coordinate system and to remove some confounding factors. 
            </p>

            <p className = "text-2xl font-bold">
                The general coordinate system. 
            </p>

            <p className="text-xl">
                Let&apos;s consider the initial models of the solar system. In those models the earth was placed as the center of the solar system, an assumption heavily 
                influenced by the observer. Using the Earth as a reference point made it difficult to describe planetary movement. However, when the sun was placed at 
                the center, the planetary movement was easily described by a set of equations. Changing the reference point resulted in the discovery of a general 
                coordinate system. 
            </p>

            <p className="text-xl">
                Currently, there are a series of methods to discover coordinate systems, one of those techniques relies on the use of machine learning models. 
                Particularly by training a specific architecture of neural network known as VAE or variational autoencoder. Training a VAE network with SARS-Cov2 
                genomic data sorts the genome by similarity following the solar gradient over a yearly scale. Such correlation is in the range of 65% to 85% 
            </p>

            <p className = "text-2xl font-bold">
                The confounding factors. 
            </p>

            <p className="text-xl">
                As described before, near zero gradient conditions change time and location-wise. Those changes are influenced by the geometry of the planet as well 
                as phenomena that change atmospheric composition. Pollution, cloudiness, and the time of day are some of the environmental factors that influence COVID-19 
                prevalence that have been reported in the scientific literature. Yet its correlation is heavily underestimated due to how the data is processed. 
                If data is averaged through large extensions of land the effect vanishes due to changes in gradient value. Making the best approach to analyze data at 
                the city or municipality level. 
            </p>

            <p className = "text-2xl font-bold">
                Putting everything together. 
            </p>


            <p className="text-xl">
                First, case data from a particular city are selected and plotted against the day duration. This results in a graph where cases are clustered at 
                the extremes. 
            </p>

            <CasesDL>
            </CasesDL>

            <p className="text-xl">
                But, when the data is plotted against the day duration gradient both peaks change position inside the graph. Showing that there must be a fractional 
                gradient value that aligns both peaks. 
            </p>

            <CasesDLG>
            </CasesDLG>

            <p className="text-xl">
                A swept-through different fractional order gradient value aligns both peaks into a single one. Allowing to identify periods of high and low 
                prevalence. Analyzing the data by city removes the influence of averaging different locations with contradictory gradient values, while the 
                fractional gradient calculation removes the distortion generated by the shape of the planet. 
            </p>

            <CasesDLGF>
            </CasesDLGF>

            <p className="text-xl">
                Summarizing, genomic data encodes seasonality through changes in composition often referred to as mutations. Such seasonality or general 
                coordinate system can be retrieved using machine learning techniques. Plotting cases vs the discovered seasonality allows to cluster disease 
                prevalence into a single unified period. 
            </p>

            <p className="text-xl">
                Classifying pathogens due to their correlation to environmental variables is something already done, but it&apos;s constrained to temperature, mainly 
                classifying them into tropical diseases or winter diseases. Solar activity is just an umbrella term that englobes solar irradiation, the magnetic 
                field, and other phenomena that result from solar wind.  Pathogens with solar rhythmicity could also be classified as circadian viruses as the 
                synchronization of the circadian rhythm is heavily influenced by solar activity. Due to its rhythmicity, it&apos;s likely that infections with circadian 
                viruses resulted in the disruption of mechanisms involved in the synchronization of the circadian rhythm. Most likely the end result will be 
                accelerated aging, disruption of the sleep-wake cycle, and increased sensitivity to solar activity. The overall components needed to synchronize 
                the circadian rhythm are there, but the timing at which those components are needed is incorrect.  
            </p>

            <p className = "text-2xl font-bold">
                Why the name? 
            </p>

            <p className="text-xl">
                If outbreaks, pandemics, and overall mortality are tightly correlated to near-zero gradient conditions such observation had likely been presented 
                before. In the Mexica religion, the different gods were just representations of natural phenomena. Particularly, Tlahuizcalpantecuhtli, or the 
                &quot;early morning star&quot; or the &quot;lord of the dawn&quot;, represented Venus and its menacing aspects. It was believed that its rays could damage people, crops, 
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