
import { ModelComponent } from "./modelcomponent";

export const MainModel = () => {
    return (
        <div className = "flex flex-col space-y-10 p-10">
            <p className="text-3xl font-bold">
                Tlahuizcalpantecuhtli - A machine learning model for SARS-Cov2 susceptibility forecast
            </p>

            <ModelComponent>

            </ModelComponent>
            
            <p>
                Note. Although forecasting the susceptibility to SARS-Cov2 can be done with some accuracy the forecast heavily relies on the simulation of 
                solar activity as well as other environmental variables. Thus the forecast can lead to inaccurate results if the simulation of solar activity does 
                not match current weather or environment. 
                A combination of the forecast, weather, climate, and other patterns of solar activity will be the best approach to correctly address the 
                susceptibility to SARS-CoV-2 infection. Please refer to <em>Why it happens?</em> or to <em>How does it works?</em> for more information 
            </p>

        </div>
        
    );
};