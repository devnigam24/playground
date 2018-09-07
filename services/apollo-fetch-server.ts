import { createApolloFetch } from 'apollo-fetch';

class ApolloFetch {

  private options: {} = '';

  private query: string = ``;

  private apolloFetch: any;

  constructor(uri, options) {
    this.options = options;
    this.apolloFetch = createApolloFetch({ uri });
    this._fetch();
  };

  private _fetch() {
    const query = this.query;
    this.apolloFetch({ query }).then(result => {
      const { data, errors, extensions } = result;
      console.log({ data });
      console.log({ errors });
      console.log({ extensions });
    })
      .catch(error => {
        console.log('------------------------------------------------------------');
        console.error('something wrong ', error);
        console.log('------------------------------------------------------------');
      });
  }
}

const fetch = (uri:string, options) => new ApolloFetch(uri, options);

export default {
  fetch
}