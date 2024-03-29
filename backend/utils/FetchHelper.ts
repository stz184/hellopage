type ParametersMap = { [index: string]: string };

export interface FetchHelper {
  get: (url: string, params?: ParametersMap | undefined, headers?: ParametersMap | undefined) => Promise<any>,
  post: (url: string, data: any | undefined, headers?: ParametersMap | undefined) => Promise<any>
}

export default {
  get(url: string, params?: ParametersMap | undefined, headers?: ParametersMap | undefined): Promise<any> {
    let urlObject = new URL(url);

    typeof params === "object" && Object.keys(params).forEach((key) => urlObject.searchParams.set(key, params[key]));

    return fetch(url, {headers})
      .then((response) => {
        if (response.ok) {
          return response;
        }

        throw new Error('Something went wrong.');
      })
      .then(res => res.json());
  },
  post(url: string, data: ParametersMap | undefined = {}, headers?: ParametersMap | undefined): Promise<any> {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/ld+json',
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(data),
      credentials: 'same-origin',
    })
      .then((response) => {
        if (response.ok) {
          return response;
        }

        throw new Error('Something went wrong.');
      })
      .then(res => res.json());
  }

} as FetchHelper;
