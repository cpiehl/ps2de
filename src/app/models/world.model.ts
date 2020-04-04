export interface Name {
    en: string;
    de: string;
    es: string;
    fr: string;
    it: string;
    tr: string;
}

export interface Description {
    en: string;
    de: string;
    es: string;
    fr: string;
    it: string;
    tr: string;
}

export interface World {
    world_id: string;
    state: string;
    name: Name;
    description: Description;
}

export interface Worlds {
    world_list: World[];
    returned: number;
}
