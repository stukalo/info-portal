export interface CountryCurrency {
    code: string,
    name: string,
    symbol: string,
}

export interface CountryLanguage {
    name: string,
    iso639_1: string,
    iso639_2: string,
}

export interface CountryRegionalBloc {
    name: string,
    acronym: string,
    otherNames: string[],
    otherAcronyms: string[],
}

export interface Capital {
    name: string,
    lat: number,
    lon: number,
}

export interface Country {
    area: number,
    cios: string,
    flag: string,
    gini: number,
    name: string,
    latlng: number[],
    region: string,
    borders: string[],
    capital: string,
    demonym: string,
    languages: CountryLanguage[],
    subregion: string,
    timezones: string[],
    alpha2Code: string,
    alpha3Code: string,
    currencies: CountryCurrency[],
    nativeName: string,
    population: number,
    numericCode: string,
    altSpellings: string[],
    callingCodes: string[],
    translations: {
        br: string,
        de: string,
        es: string,
        fa: string,
        fr: string,
        hr: string,
        it: string,
        ja: string,
        nl: string,
        pt: string,
    }
    regionalBlocs: CountryRegionalBloc[],
    topLevelDomain: string[],
}
