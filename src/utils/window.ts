interface IUrlParams {
  [key: string]: string | number | boolean;
}

// ----------------------------------------------------------------------

const getUrlParams = (defaultParams: IUrlParams = {}): IUrlParams => {
  const params: IUrlParams = { ...defaultParams };
  const urlParams = new URLSearchParams(window.location.search);

  for (const [name, value] of urlParams.entries()) {
    if (value === "") {
      params[name] = true;
      continue;
    }

    if (value === "true" || value === "false") {
      params[name] = value === "true";
      continue;
    }

    const numberValue = parseFloat(value);
    params[name] = isNaN(numberValue) ? value : numberValue;
  }

  return params;
};

// ----------------------------------------------------------------------

export { getUrlParams, type IUrlParams };
