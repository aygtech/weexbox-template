import ApolloClient from 'apollo-boost'
import Response from './response'

const network = weex.requireModule('wb-network')

const weexFetch = function weexFetch(uri, options) {
  return new Promise((resolve) => {
    network.request({
      url: uri,
      method: 'post',
      headers: options.headers,
      params: JSON.parse(options.body),
    }, (result) => {
      const response = new Response(result)
      resolve(response)
    })
  })
}

export default new ApolloClient({
  uri: 'http://localhost:4000/',
  // uri: 'https://server-htt21vkew.now.sh/',
  fetch: weexFetch,
})
