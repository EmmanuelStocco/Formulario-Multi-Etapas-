import { Router } from "./router"
import { FormProvider } from'./contexts/FormContext';

export default function App() { 
  return(
    <FormProvider>
       <Router />
     </FormProvider>
  )
}
