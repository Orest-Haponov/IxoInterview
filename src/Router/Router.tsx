import { Route, Routes } from "react-router"
import { appRoutes } from "./constant"
import PageRoutes from "../PageRoutes/PageRoutes"
import PageOne from "../PageRoutes/components/PageOne"
import PageTwo from "../PageRoutes/components/PageTwo"
import PageThree from "../PageRoutes/components/PageThree"

export const useRoutes = () => {
  return (
    <Routes >
      <Route path={appRoutes.index} element={<PageRoutes/>}>
        <Route path={appRoutes.pageOne} element={<PageOne />}/>
        <Route path={appRoutes.pageTwo} element={<PageTwo />}/>
        <Route path={appRoutes.pageThree} element={<PageThree />}/>
      </Route>
    </Routes>
  )
}