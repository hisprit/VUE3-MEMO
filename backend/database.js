const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'dpdldpa76',
    connectionLimit: 30,
    port: 3308,
    database: 'memo'
});

module.exports = {

    async run(query, params) {
        return new Promise((resolve)=>{
            pool.getConnection()
            .then(conn => {
                conn.query(query, params)
                    .then((rows) => {
                        resolve(rows);    
                        conn.end();                    
                    })
                    .catch(err => {
                        console.log(err);
                        conn.end();
                        pool.end();
                    })

            }).catch(err => {
                pool.end();
            });
        })        
    }
}
