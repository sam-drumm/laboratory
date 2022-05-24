const connection = require('./connection')

module.exports = {
  getMessages,
  addMessage,
  getMessageById,
  getMessageByAuthId
}

function sort (messageArray) {
  const allMessages = [...messageArray]
  allMessages.sort((a, b) => a.id - b.id)
  return allMessages
}

async function getMessages (db = connection) {
  return db('messages').select().then(sort)
}

async function addMessage (input, db = connection) {
  const { auth0Id, id, why, bring, share } = input
  const message = { auth0_id: auth0Id, project_id: id, why, bring, share }
  return db('messages')
    .insert(message)
    .then(() => db)
    .then(getMessages)
    .then(sort)
}

async function getMessageById (id, db = connection) {
  return db('Messages')
    .select(
      'id',
      'auth0_id as authId',
      'project_id as projectId',
      'why',
      'bring',
      'share'
    )
    .where('id', id)
    .first()
}

async function getMessageByAuthId (auth0Id, db = connection) {
  return db('Messages').select()
    .where('auth0_id', auth0Id)
}
