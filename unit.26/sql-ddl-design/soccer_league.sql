
CREATE TABLE refs(
    id SERIAL PRIMARY KEY,
    ref_name TEXT NOT NULL
);

CREATE TABLE team(
    id SERIAL PRIMARY KEY,
    team TEXT NOT NULL
);

CREATE TABLE season(
    id SERIAL PRIMARY KEY,
    start_dat DATE,
    end_date DATE
);

CREATE TABLE player(
    id SERIAL PRIMARY KEY,
    player_name TEXT NOT NULL,
    team_id INTEGER REFERENCES team ON DELETE CASCADE
);

CREATE TABLE match(
    id SERIAL PRIMARY KEY,
    season_id INTEGER REFERENCES season ON DELETE CASCADE,
    ref_id INTEGER REFERENCES refs ON DELETE CASCADE,
    home_team_id INTEGER REFERENCES team ON DELETE CASCADE,
    away_team_id INTEGER REFERENCES team ON DELETE CASCADE
);

CREATE TABLE lineups(
    id SERIAL PRIMARY KEY,
    player_id INTEGER REFERENCES player ON DELETE CASCADE,
    match_id INTEGER REFERENCES match ON DELETE CASCADE,
    team_id INTEGER REFERENCES team ON DELETE CASCADE
);

CREATE TABLE results(
    id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES team ON DELETE CASCADE,
    match_id INTEGER REFERENCES match ON DELETE CASCADE,
    result TEXT
);

CREATE TABLE goals(
    id SERIAL PRIMARY KEY,
    player_id INTEGER REFERENCES player ON DELETE CASCADE,
    match_id INTEGER REFERENCES match ON DELETE CASCADE
)








