
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

export interface Day {
    d01: string;
    d02: string;
    d03: string;
    d04: string;
    d05: string;
    d06: string;
    d07: string;
    d08: string;
    d09: string;
    d10: string;
    d11: string;
    d12: string;
    d13: string;
    d14: string;
    d15: string;
    d16: string;
    d17: string;
    d18: string;
    d19: string;
    d20: string;
    d21: string;
    d22: string;
    d23: string;
    d24: string;
    d25: string;
    d26: string;
    d27: string;
    d28: string;
    d29: string;
    d30: string;
    d31: string;
}

export interface Month {
    m01: string;
    m02: string;
    m03: string;
    m04: string;
    m05: string;
    m06: string;
    m07: string;
    m08: string;
    m09: string;
    m10: string;
    m11: string;
    m12: string;
}

export interface Week {
    w01: string;
    w02: string;
    w03: string;
    w04: string;
    w05: string;
    w06: string;
    w07: string;
    w08: string;
    w09: string;
    w10: string;
    w11: string;
    w12: string;
    w13: string;
}

export interface StatHistory {
    stat_name: string;
    all_time: string;
    one_life_max: string;
    day: Day;
    month: Month;
    week: Week;
    last_save: string;
    last_save_date: string;
}

export interface Stats {
    stat_history: StatHistory[];
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
    stats: Stats;
}

export interface Characters {
    character_list: Character[];
    returned: number;
}
