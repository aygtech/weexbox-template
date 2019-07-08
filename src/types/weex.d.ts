declare namespace we {
  interface instance {
      config: any
      requireModule(name: string): any
  }
}

declare var weex: we.instance