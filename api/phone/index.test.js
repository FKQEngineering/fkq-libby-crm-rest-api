import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Phone } from '.'

const app = () => express(apiRoot, routes)

let phone

beforeEach(async () => {
  phone = await Phone.create({phoneNumber: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test'})
})

test('POST /phones 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({phoneNumber: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test'})
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.phoneNumber).toEqual('test')
  expect(body.createddate).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedDate).toEqual('test')
  expect(body.modifiedby).toEqual('test')
  expect(body.isDeleted).toEqual('test')
  expect(body.deleteComment).toEqual('test')
})

test('GET /phones 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /phones/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${phone.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(phone.id)
})

test('GET /phones/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /phones/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${phone.id}`)
    .send({phoneNumber: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test'})
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(phone.id)
  expect(body.phoneNumber).toEqual('test')
  expect(body.createddate).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedDate).toEqual('test')
  expect(body.modifiedby).toEqual('test')
  expect(body.isDeleted).toEqual('test')
  expect(body.deleteComment).toEqual('test')
})

test('PUT /phones/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({phoneNumber: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedBy: 'test', isDeleted: 'test', deleteComment: 'test'})
  expect(status).toBe(404)
})

test('DELETE /phones/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${phone.id}`)
  expect(status).toBe(204)
})

test('DELETE /phones/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
