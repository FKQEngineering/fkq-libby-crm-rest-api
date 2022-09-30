import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Email } from '.'

const app = () => express(apiRoot, routes)

let email

beforeEach(async () => {
  email = await Email.create({emailAddress: 'test', name: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test'})
})

test('POST /emails 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ emailAddress: 'test', name: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.emailAddress).toEqual('test')
  expect(body.createddate).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedDate).toEqual('test')
  expect(body.modifiedby).toEqual('test')
  expect(body.isDeleted).toEqual('test')
  expect(body.deleteComment).toEqual('test')
})

test('GET /emails 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /emails/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${email.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(email.id)
})

test('GET /emails/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /emails/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${email.id}`)
    .send({ emailAddress: 'test', name: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(email.id)
  expect(body.emailAddress).toEqual('test')
  expect(body.createddate).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedDate).toEqual('test')
  expect(body.modifiedby).toEqual('test')
  expect(body.isDeleted).toEqual('test')
  expect(body.deleteComment).toEqual('test')
})

test('PUT /emails/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ emailAddress: 'test', name: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test' })
  expect(status).toBe(404)
})

test('DELETE /emails/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${email.id}`)
  expect(status).toBe(204)
})

test('DELETE /emails/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
