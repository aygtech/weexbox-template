import ApolloClient from 'apollo-boost'

const network = weex.requireModule('wb-network')

const weexFetch = function weexFetch(uri, options) {
  console.log(uri)
  console.log(JSON.stringify(options))
  return new Promise((resolve) => {
    network.request({
      url: uri,
      method: 'post',
      headers: options.headers,
      params: options.body,
    }, (result) => {
      console.log(JSON.stringify(result))
      resolve(result)
    })
  })
}

export default new ApolloClient({
  uri: 'https://server-htt21vkew.now.sh/',
  fetch: weexFetch,
})
