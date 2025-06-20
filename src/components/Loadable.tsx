import { Suspense, type ComponentType } from "react";
import { getUrlParams, type IUrlParams } from "@kared/utils/window";

// ----------------------------------------------------------------------

type LoadableProps = {
  urlParams: IUrlParams;
};

// ----------------------------------------------------------------------

const Loadable = <P extends object>(Component: ComponentType<P & LoadableProps>) =>
  function setLoadable(props: P) {
    const urlParams = getUrlParams();

    // <Suspense fallback={<LoadingScreen />}>

    return (
      <Suspense>
        <Component {...props} urlParams={urlParams} />
      </Suspense>
    );
  };

// ----------------------------------------------------------------------

export default Loadable;
