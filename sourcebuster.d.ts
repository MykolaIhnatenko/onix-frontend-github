declare module 'sourcebuster' {
  class Sbjs {
    init(prefs?:Preferences);
  }

  interface Preferences {
    lifetime?:number
    session_length?:number
    timezone_offset?:number
    campaign_param?:string
    term_param?:string
    content_param?:string
    user_ip?:string
    promocode?:boolean | PromoCode
    typein_attributes?:TypeInAttributes
    domain?:string | Domain
    callback:(data:never)=>void
  }

  interface Domain {
    host:string
  }

  interface TypeInAttributes {
    source:string,
    medium:string
  }

  interface PromoCode {
    max:number,
    min:number
  }
  export = new Sbjs();
}
