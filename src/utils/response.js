class Response {
  constructor(result) {
    this.status = result.status
    this.data = result.data
  }

  text() {
    return new Promise((resolve) => {
      resolve(JSON.stringify(this.data))
    })
  }
}

export default Response
