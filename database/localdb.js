import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("laptime.db");

export const initDB = () => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(`CREATE TABLE IF NOT EXISTS laptimes (
                id INTEGER PRIMARY KEY NOT NULL,
                laptime INTEGER NOT NULL
            )`, [],
            (tx, res) => resolve(res),
            (tx, err) => reject(err)
            )
        })
    })
};

export const findAll = () => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(`SELECT * FROM laptimes`, [],
            (tx, res) => resolve(res),
            (tx, err) => reject(err)
            )
        })
    })
};

export const deleteAll = () => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(`DELETE FROM laptimes`, [],
            (tx, res) => resolve(res),
            (tx, err) => reject(err)
            )
        })
    })
};

export const insert = (laptime) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(`
                INSERT INTO laptimes (laptime)
                VALUES (?)
            `, [laptime],
            (tx, res) => resolve(res),
            (tx, err) => reject(err)
            )
        })
    })
};