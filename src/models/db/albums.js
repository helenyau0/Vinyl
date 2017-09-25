const { client } = require('./db')

client.connect()

function getAll(cb) {
  _query('SELECT * FROM albums', [], cb)
}

function getByID(albumID, cb) {
  _query('SELECT * FROM albums WHERE id = $1', [albumID], cb)
}

function _query(sql, variables, cb) {
  console.log('QUERY ->', sql.replace(/[\n\s]+/g, ' '), variables)

  client.query(sql, variables, (error, result) => {
    if (error) {
      console.error(error)
      cb(error)
    } else {
      cb(error, result.rows)
    }
  })
}

module.exports = {
  getAll,
  getByID,
}
