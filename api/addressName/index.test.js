import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { AddressName } from '.'

const app = () => express(apiRoot, routes)

let addressName

beforeEach(async () => {
  addressName = await AddressName.create({})
})

test('POST /addressNames 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedby: 'test', isDeleted: 'test', deleteComment: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.createddate).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedDate).toEqual('test')
  expect(body.modifiedby).toEqual('test')
  expect(body.isDeleted).toEqual('test')
  expect(body.deleteComment).toEqual('test')
})

test('GET /addressNames 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /addressNames/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${addressName.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(addressName.id)
})

test('GET /addressNames/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /addressNames/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${addressName.id}`)
    .send({ name: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedby: 'test', isDeleted: 'test', deleteComment: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(addressName.id)
  expect(body.name).toEqual('test')
  expect(body.createddate).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.modifiedDate).toEqual('test')
  expect(body.modifiedby).toEqual('test')
  expect(body.isDeleted).toEqual('test')
  expect(body.deleteComment).toEqual('test')
})

test('PUT /addressNames/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', createddate: 'test', createdBy: 'test', modifiedDate: 'test', modifiedby: 'test', isDeleted: 'test', deleteComment: 'test' })
  expect(status).toBe(404)
})

test('DELETE /addressNames/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${addressName.id}`)
  expect(status).toBe(204)
})

test('DELETE /addressNames/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
