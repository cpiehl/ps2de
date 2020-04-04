export interface Name {
    de: string;
    en: string;
    es: string;
    fr: string;
    it: string;
    tr: string;
}

export interface Faction {
    faction_id: string;
    name: Name;
    code_tag: string;
    user_selectable: string;
    image_set_id: string;
    image_id: string;
    image_path: string;
}

export interface Factions {
    faction_list: Faction[];
    returned: number;
}