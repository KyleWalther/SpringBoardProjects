CREATE DATABASE doctor_db;
\c doctor_db;

CREATE TABLE doctors(
    id SERIAL PRIMARY KEY,
    doc_name TEXT NOT NULL,
    patient_num INTEGER
);


CREATE TABLE patients(
    id SERIAL PRIMARY KEY,
    patient_name TEXT NOT NULL,
    gender TEXT
);

CREATE TABLE check_up(
    id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patient ON DELETE CASCADE,
    doctor_id INTEGER REFERENCES doctors ON DELETE CASCADE
);

CREATE TABLE diagnoses(
    id SERIAL PRIMARY KEY,
    check_up_id INTEGER REFERENCES check_up ON DELETE CASCADE,
    disease_id INTEGER REFERENCES disease ON DELETE CASCADE
);

CREATE TABLE check_up(
    id SERIAL PRIMARY KEY,
    disease_name TEXT,
    cure BOOLEAN
);















