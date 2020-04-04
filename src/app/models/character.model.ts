
export interface Name {
    first: string;
    first_lower: string;
}

export interface Times {
    creation: string;
    creation_date: string;
    last_save: string;
    last_save_date: string;
    last_login: string;
    last_login_date: string;
    login_count: string;
    minutes_played: string;
}

export interface Certs {
    earned_points: string;
    gifted_points: string;
    spent_points: string;
    available_points: string;
    percent_to_next: string;
}

export interface BattleRank {
    percent_to_next: string;
    value: string;
}

export interface DailyRibbon {
    count: string;
    time: string;
    date: string;
}

export interface Character {
    character_id: string;
    name: Name;
    faction_id: string;
    head_id: string;
    title_id: string;
    times: Times;
    certs: Certs;
    battle_rank: BattleRank;
    profile_id: string;
    daily_ribbon: DailyRibbon;
    prestige_level: string;
    world_id: string;
}

export interface Characters {
    character_list: Character[];
    returned: number;
}
